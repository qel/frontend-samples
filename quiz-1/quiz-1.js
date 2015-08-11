
for (var i = 0; i < 10; i++) (function(x)
{
    setTimeout(function () {
        console.log(x);
    }, i * 1000);
})(i);
