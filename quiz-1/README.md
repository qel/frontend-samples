## INSTRUCTIONS

Answer these questions:

- What will the effect and output of this script be?
- What did the developer probably intend it to output?
- Why does it not do this?
- How could you fix it to do that?



# Quiz 1

# - What will the effect and output of this script be?

It will output '10' to the console 10 times.


# - What did the developer probably intend it to output?

They probably wanted it to count 0 through 9.


# - Why does it not do this?

Because i is a global variable, and the varible is getting sent to the functions not the value. By the time they fire the value is always 10.

Although the first iteration of the loop is creating a zero-millisecond timer which might not always wait to fire till the loop completes... It probably only returns 10 because javascript isn't multithreaded.


# - How could you fix it to do that?

If you pass i as a parameter it will copy the correct value to a local parameter for each iteration, and you can use the local one to display the correct value:

for (var i = 0; i < 10; i++) (function(x)
{
    setTimeout(function () {
        console.log(x);
    }, i * 1000);
})(i);

