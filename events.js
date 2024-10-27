function clickevent()
{
document.write("Hi There!");
}


function over()
{
document.getElementById('key').innerHTML= "Onmouseover event has occurred";
}
function out()
{
document.getElementById('key').innerHTML= "Onmouseout event has occurred";
}


function myFunction2() {
let x = document.getElementById("cd"); 
x.value = x.value.toUpperCase();
}
function myFunction(x) { 
    document.getElementById(x).style.background = "yellow";
}
