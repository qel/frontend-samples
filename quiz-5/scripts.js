
function isPangram(s) {
    var lower = s.toLowerCase();
    for (var i = 0; i < 26; i++) {
        if(lower.indexOf(String.fromCharCode(i + 97)) === -1) {
            return false;
        }
    }
    return true;
}

$(document).ready(function() {
    $('form').on('submit', function() {

        var $template = $($('#results-template').text()).clone();
        var $sentence = $('form input[name=sentence]');

        if (isPangram($sentence.val())) {
        	
        	// add a unique class to each letter of a valid pangram
        	var letters = $sentence.val().split('');
        	$.each(letters, function(i) {
        		var num = letters[i].toLowerCase().charCodeAt(0) - 97;
        		if (num >= 0 && num < 26) {
            	    letters[i] = '<span class="letter' + num + '">' + letters[i] + '</span>';
        		}
        	}); 
            $template.find('div.input').html(letters.join(''));
            
            $template.find('p.pass').show();
            $template.addClass('pass');
            $template.prependTo('#results').hide().slideDown();

            // if we're not already animating, start the animation
            if ($('span:animated').length == 0) {
    			cycleAnimation();
            }
        }
        else {
            $template.find('div.input').text($sentence.val());
            $template.find('p.fail').show();
            $template.addClass('fail');
            $template.prependTo('#results').hide().slideDown();
        }

        $sentence.val('');
        
        return false;
    });
});

function cycleAnimation() {
	
	var speed = 800; //delay in ms for each letter of the alphabet
	var persist = 1.25; //how many cycles till we go back to normal

	for (var i = 0; i < 26; i++) (function(x) // x = local copy of iterator
	{
		// timer to grow the letter
		setTimeout(function() {
			$('span.letter' + x).animate({ fontSize : "200%" }, speed);
		}, x * speed);
		
		// timer to shrink the letter
		setTimeout(function() {
			$('span.letter' + x).animate({ fontSize : "100%" }, speed);
		}, (x * speed) + (speed * persist));
	})(i)
	
	$('input.dance').slideUp(); // hide any old dance buttons while we animate
	
	// show the dance button once the animation finishes
	setTimeout(function() {
		$('.pass input.dance').first().hide().slideDown();
		
		// wire it up (use one to prevent double-clicks that could cause weirdness)
		$('.pass input.dance').first().one('click', function() { cycleAnimation(); });
	}, 27 * speed)
}
