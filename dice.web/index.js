
var a= (Math.floor(Math.random()*6))+1;
var b= (Math.floor(Math.random()*6))+1;

switch (a) {
    case 1:
        var element = document.querySelector('.D1 .f1');
        toggleVisibility(element); 
        break; 
    case 2: 
        var element = document.querySelector('.D1 .f2');
        toggleVisibility(element); 
        break; 
    case 3: 
        var element = document.querySelector('.D1 .f3');
        toggleVisibility(element); 
        break; 
    case 4: 
        var element = document.querySelector('.D1 .f4');
        toggleVisibility(element); 
        break; 
    case 5: 
        var element = document.querySelector('.D1 .f5');
        toggleVisibility(element); 
        break; 
    case 6: 
        var element = document.querySelector('.D1 .f6');
        toggleVisibility(element);
        break;
}
switch (b) {
    case 1:
        var element = document.querySelector('.D2 .f1');
        toggleVisibility(element); 
        break; 
    case 2: 
        var element = document.querySelector('.D2 .f2');
        toggleVisibility(element); 
        break; 
    case 3: 
        var element = document.querySelector('.D2 .f3');
        toggleVisibility(element); 
        break; 
    case 4: 
        var element = document.querySelector('.D2 .f4');
        toggleVisibility(element);
        break;
    case 5:
        var element = document.querySelector('.D2 .f5');
        toggleVisibility(element);
        break;
    case 6:
        var element = document.querySelector('.D2 .f6');
        toggleVisibility(element);
        break;
}
if(a>b)
{
    var element = document.querySelector('.c1');
    toggleVisibility(element);
}
else if(b>a)
{
    var element = document.querySelector('.c2');
    toggleVisibility(element);
}
else
{
    var element = document.querySelector('.c2');
    toggleVisibility(element);
    var element = document.querySelector('.c1');
    toggleVisibility(element);
}
function toggleVisibility(element) {
    if (element.style.visibility === 'visible') {
        element.style.visibility = 'hidden';
    } else {
        element.style.visibility = 'visible';
    }
}
var replay=document.getElementById('replay');
replay.addEventListener('click', function() {
    location.reload();
});



