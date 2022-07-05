'use strict';

const circle = document.getElementById('circle');
const slider = document.getElementById('myRange');
const display = document.getElementById('display');
const equals = document.getElementById('equal');
const sevenn = document.getElementById('seven');
const eightt = document.getElementById('eight');
const pluss = document.getElementById('plus');
const sixx = document.getElementById('six');
const fivee = document.getElementById('five');
const multiplyy = document.getElementById('multiply');
const division = document.getElementById('division');
const minuss = document.getElementById('minus');
const fourr = document.getElementById('four');
const threee = document.getElementById('three');
const twoo = document.getElementById('two');
const onee = document.getElementById('one');
const zeroo = document.getElementById('zero');
const ninee = document.getElementById('nine');
const resett = document.getElementById('reset');
const selector = document.getElementById('selector');
const delet = document.getElementById('del');
const flexTop = document.getElementById('flex-top');
const gridBox = document.getElementById('grid-box');
const buttons2 = document.querySelectorAll('.grid-item');

let arrAll = [];
let arry = [];
let arry2 = [];
let arryContain = [];

/*NUMBERS */
function seven() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(7);
  } else {
    arry.push(7);
  }
  arrAll.push(7);
  display.value = arrAll.join('');
}

function five() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(5);
  } else {
    arry.push(5);
  }
  arrAll.push(5);
  display.value = arrAll.join('');
}
function six() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(6);
  } else {
    arry.push(6);
  }
  arrAll.push(6);
  display.value = arrAll.join('');
}
function four() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(4);
  } else {
    arry.push(4);
  }
  arrAll.push(4);
  display.value = arrAll.join('');
}
function zero() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(0);
  } else {
    arry.push(0);
  }
  arrAll.push(0);
  display.value = arrAll.join('');
}
function two() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(2);
  } else {
    arry.push(2);
  }
  arrAll.push(2);
  display.value = arrAll.join('');
}
function one() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(1);
  } else {
    arry.push(1);
  }
  arrAll.push(1);
  display.value = arrAll.join('');
}
function three() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(3);
  } else {
    arry.push(3);
  }
  arrAll.push(3);
  display.value = arrAll.join('');
}

function eight() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(8);
  } else {
    arry.push(8);
  }
  arrAll.push(8);
  display.value = arrAll.join('');
}
function nine() {
  const find = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );

  if (find) {
    arry2.push(9);
  } else {
    arry.push(9);
  }
  arrAll.push(9);
  display.value = arrAll.join('');
}
function plus() {
  arrAll.push('+');
  display.value = arrAll.join('');
}
function multiply() {
  arrAll.push('*');
  display.value = arrAll.join('');
}
function divide() {
  arrAll.push('/');
  display.value = arrAll.join('');
}
function minus() {
  arrAll.push('-');
  display.value = arrAll.join('');
}
function reset() {
  arry = [];
  arry2 = [];
  display.value = '';
  arrAll = [];
}

/*EVENT LISTENERS*/
pluss.addEventListener('click', plus);
multiplyy.addEventListener('click', multiply);
sevenn.addEventListener('click', seven);
eightt.addEventListener('click', eight);
fivee.addEventListener('click', five);
division.addEventListener('click', divide);
minuss.addEventListener('click', minus);
fourr.addEventListener('click', four);
threee.addEventListener('click', three);
sixx.addEventListener('click', six);
twoo.addEventListener('click', two);
onee.addEventListener('click', one);
zeroo.addEventListener('click', zero);
ninee.addEventListener('click', nine);
resett.addEventListener('click', reset);

function calculate(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let val = newArr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return val;
}

function convert() {
  display.value = arry.join('');
}

convert();

function equalizer() {
  const number1 = +arry.join('');
  const number2 = +arry2.join('');
  console.log(number1);
  console.log(number2);
  const found = arrAll.find(
    element =>
      element === '+' || element === '*' || element === '-' || element === '/'
  );
  console.log(found);
  /*const multiplyInitial = arry2.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );*/

  /*const minusWithInitial = arry2.reduce(
    (previousValue, currentValue) => previousValue - currentValue
  );
  const divideInitial = arry2.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );*/

  switch (found) {
    case '+':
      display.value = number1 + number2;
      break;
    case '/':
      display.value = number1 / number2;
      break;
    case '-':
      display.value = number1 - number2;
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case '*':
      display.value = number1 * number2;
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}

equals.addEventListener('click', equalizer);

slider.oninput = function () {
  if (slider.value === '1') {
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    resett.style.backgroundColor = 'hsl(225, 21%, 49%)';
    resett.style.boxShadow = '0px 6px 0px hsl(224, 28%, 35%)';
    delet.style.backgroundColor = 'hsl(225, 21%, 49%)';
    delet.style.boxShadow = '0px 6px 0px hsl(224, 28%, 35%)';
    flexTop.style.color = 'white';
    gridBox.style.backgroundColor = 'hsl(223, 31%, 20%)';
    display.style.color = 'white';
    slider.style.backgroundColor = 'hsl(223, 31%, 20%)';
    display.style.backgroundColor = 'hsl(224, 36%, 15%)';
    for (const box of buttons2) {
      box.classList.add('number');
      box.style.color = 'hsl(221, 14%, 31%)';
      box.classList.remove('secondInput');
    }
    equals.style.backgroundColor = 'hsl(6, 63%, 50%)';
    equals.style.boxShadow = '0px 6px 0px hsl(6, 70%, 34%)';
    equals.style.color = 'white';
    delet.style.backgroundColor = 'hsl(225, 21%, 49%)';
    delet.style.color = 'white';
    resett.style.color = 'white';
    console.log(slider.value);
  } else if (slider.value === '2') {
    document.body.style.backgroundColor = 'hsl(0, 0%, 93%)';
    resett.style.backgroundColor = 'hsl(185, 42%, 37%)';
    resett.style.boxShadow = '0px 6px 0px hsl(185, 58%, 25%)';
    delet.style.backgroundColor = 'hsl(185, 42%, 37%)';
    flexTop.style.color = 'black';
    slider.style.backgroundColor = 'hsl(0, 0%, 87%)';
    delet.style.boxShadow = ' 0px 6px 0px hsl(185, 58%, 25%)';
    display.style.backgroundColor = 'white';
    display.style.color = 'black';
    gridBox.style.backgroundColor = 'hsl(0, 0%, 87%)';
    for (const box of buttons2) {
      box.classList.remove('number');
      box.classList.add('secondInput');
      box.classList.remove('thirdInput');
      box.style.color = 'black';
    }
    equals.style.backgroundColor = 'hsl(6, 63%, 50%)';
    equals.style.boxShadow = '0px 6px 0px hsl(6, 70%, 34%)';
    equals.style.color = 'white';

    delet.style.color = 'white';
    resett.style.color = 'white';
    delet.style.backgroundColor = 'hsl(185, 42%, 37%)';
  } else {
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    resett.style.boxShadow = 'white';
    resett.style.color = 'white';
    flexTop.style.color = 'hsl(52, 100%, 62%)';
    delet.style.backgroundColor = 'hsl(281, 89%, 26%)';
    slider.style.backgroundColor = 'hsl(268, 71%, 12%)';
    delet.style.boxShadow = ' 0px 6px 0px hsl(185, 58%, 25%)';
    display.style.backgroundColor = 'hsl(268, 71%, 12%)';
    display.style.color = 'hsl(52, 100%, 62%)';
    gridBox.style.backgroundColor = 'hsl(268, 71%, 12%)';
    for (const box of buttons2) {
      box.classList.remove('number');
      box.style.color = 'hsl(52, 100%, 62%)';
      box.classList.remove('secondInput');
      box.classList.add('thirdInput');
    }
    resett.classList.remove('thirdInput');
    resett.classList.remove('secondInput');
    resett.style.backgroundColor = 'hsl(281, 89%, 26%)';
    resett.style.color = 'white';
    resett.style.boxShadow = '0px 6px 0px hsl(285, 91%, 52%)';
    delet.classList.remove('thirdInput');
    delet.classList.remove('secondInput');
    delet.style.backgroundColor = 'hsl(281, 89%, 26%)';
    delet.style.boxShadow = ' 0px 6px 0px hsl(285, 91%, 52%)';
    delet.style.color = ' white';
    equals.classList.remove('thirdInput');
    equals.classList.remove('secondInput');
    equals.style.backgroundColor = 'hsl(176, 100%, 44%)';
    equals.style.boxShadow = ' 0px 6px 0px hsl(177, 92%, 70%)';
    equals.style.color = 'black';
    circle.style.backgroundColor = 'hsl(176, 100%, 44%)';
  }
};
