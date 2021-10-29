'use strict';
// JS-kode:

// 
let message = document.querySelector('#message')
let test = document.querySelector('#test')
// Fordi vi har gitt elementene en id kunne vi skrevet:
// let message = document.getElementById('message')
// let test = document.getElementById('test')

// Legger det inn som verdi fordi det står 0 der
document.querySelector('#inputNumber').value = 0; 

// 0-50 HVis vi vil ha med 50, må vi skrive 51
// const number1 = Math.floor(Math.random()*51);
const number2 = Math.trunc(Math.random()*50+1);


function guess() {
    let inputValue = document.querySelector('#inputNumber').value
    console.log(inputValue);
    let input = parseInt(inputValue)
    test.innerHTML = `Tallet er ${number2} og input er ${input}`
    console.log(input);
    if (input == number2) {
        message.innerHTML = `Riktig! Tallet er ${number2} og input er ${input}`
    } else if (input < number2) {
        //alert(input)
        message.innerHTML = 'Tallet er for lavt!'
    } else {
        message.innerHTML = 'Tallet er for høyt!'
    }

}
