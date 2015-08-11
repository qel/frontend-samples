
function isPangram(s) {
    var lower = s.toLowerCase();
    for (var i = 0; i < 26; i++) {
        if(lower.indexOf(String.fromCharCode(i+97)) === -1) {
            // uncomment to test:
            // console.log('missing letter: ' + String.fromCharCode(i+97));
            return false;
        }
    }
    return true;
}

function pangramTest(s) {
    if (isPangram(s)) {
        console.log('"' + s + '" IS a pangram.');
    }
    else {
        console.log('"' + s + '" is NOT a pangram.');
    }
}

pangramTest("The quick brown fox jumped over the lazy dog");
pangramTest("A wizard's job is to vex chumps quickly in fog");
pangramTest("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game");
pangramTest("This is not a pangram");

