'use strict';

// Selectors

const converter = document.querySelector('.converter');
const converterIn1 = document.querySelector('.converter__input--1');
const converterIn2 = document.querySelector('.converter__input--2');
const converterBtn1 = document.querySelector('.converter__btn--1');
const converterBtn2 = document.querySelector('.converter__btn--2');
const converterOut1 = document.querySelector('.converter__output--1');
const converterOut2 = document.querySelector('.converter__output--2');

// Functions

const numbers = {
  romanos: {
    unidades: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    decenas: ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    centenas: ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    milesimas: ['M', 'MM', 'MMM'],
  },
  arabigos: {
    unidades: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    decenas: [10, 20, 30, 40, 50, 60, 80, 90],
    centenas: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    milesimas: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
  },
};

const newNumber = [];

const displayNumber = function (event) {
  if (event.classList.contains('converter__input--1')) {
    converterOut1.textContent = `El número ${
      converterIn1.value
    } es igual a '${newNumber.join('')}' en romano`;
    converterIn1.value = '';
  } else {
    converterOut2.textContent = `Tu número es ${newNumber.join('')}`;
    converterIn2.value = '';
  }
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

const romanToArabig = function (nums) {
  const eachNumber = [...nums.toUpperCase()];
  const { unidades, decenas, centenas, milesimas } = numbers.arabigos;
  const { unidadesROM, decenasROM, centenasROM, milesimasROM } =
    numbers.romanos;
  eachNumber.map((el, i, arr) => {
    if (arr.length === 1) {
      console.log(el, i, arr);
      return unidades[i];
    }
  });
};

// Events

converterBtn1.addEventListener('click', function (e) {
  e.preventDefault();
  arabigToRoman(converterIn1.value);
  displayNumber(converterIn1);
});

converterBtn2.addEventListener('click', function (e) {
  e.preventDefault();
  romanToArabig(converterIn2.value);
  displayNumber(converterIn2);
});
