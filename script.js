/* const button =document.getElementById("left");

function hello() {

    alert('こんにちは');
    
    }

leftdiv.addEventListener('click' , hello) */

const blue ="#26ffff";


document.addEventListener('DOMContentLoaded', function() {
    const redLamp = document.querySelector('.ellipse-red');
    const yellowLamp = document.querySelector('.ellipse-yello');
    const greenLamp = document.querySelector('.ellipse-blue');

    redLamp.addEventListener('click', function() {
        redLamp.style.backgroundColor = 'red';
        yellowLamp.style.backgroundColor = 'gray';
        greenLamp.style.backgroundColor = 'gray';
    });

    yellowLamp.addEventListener('click', function() {
        redLamp.style.backgroundColor = 'gray';
        yellowLamp.style.backgroundColor = 'yellow';
        greenLamp.style.backgroundColor = 'gray';
    });

    greenLamp.addEventListener('click', function() {
        redLamp.style.backgroundColor = 'gray';
        yellowLamp.style.backgroundColor = 'gray';
        greenLamp.style.backgroundColor = blue ;
    });
}); 
