'use strict';

// Arabig to roman numbers
/*
Roman numbers
M = 1000
D = 500
C = 100
L = 50
x = 10
v = 5
I = 1
*/

// Selectors

const converter = document.querySelector('.converter');
const converterIn = document.querySelector('.converter__input');
const converterBtn = document.querySelector('.converter__btn');
const converterOut = document.querySelector('.converter__output');

// Functions

const numbers = {
  romanos: {
    unidades: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    decenas: ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    centenas: ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    milesimas: ['M', 'MM', 'MMM'],
  },
  arabigos: {},
};

const newNumber = [];
const displayNumber = function () {
  converterOut.textContent = `Tu número es ${newNumber.join('')}`;
  newNumber.length = 0;
};
const arabigToRoman = function (nums) {
  const { unidades, decenas, centenas, milesimas } = numbers.romanos;
  const eachNumber = [...nums];

  if (eachNumber.length === 1) {
    newNumber.push(unidades[nums[0] - 1]);
  } else if (eachNumber.length === 2) {
    newNumber.push(decenas[nums[0] - 1]);
    newNumber.push(unidades[nums[1] - 1]);
  } else if (eachNumber.length === 3) {
    newNumber.push(centenas[nums[0] - 1]);
    newNumber.push(decenas[nums[1] - 1]);
    newNumber.push(unidades[nums[2] - 1]);
  } else if (eachNumber.length === 4) {
    newNumber.push(milesimas[nums[0] - 1]);
    newNumber.push(centenas[nums[1] - 1]);
    newNumber.push(decenas[nums[2] - 1]);
    newNumber.push(unidades[nums[3] - 1]);
  }
};
const romanToArabig = function () {};

// Events

converterBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // console.dir(converterIn.value); // input value
  arabigToRoman(converterIn.value);
  displayNumber();
});
