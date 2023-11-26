// Задание1
let inputEl = document.getElementById("num1");
let inputEl2 = document.getElementById("num2");
let buttonEl = document.getElementById("plus");
let resultEl = document.getElementById("result");
buttonEl.onclick = function () {
  resultEl.textContent = +inputEl.value + +inputEl2.value;
};
// Задание2
let inputCheck = document.getElementById("numcheck");
let buttonCheck = document.getElementById("butCheck");
let resultCheck = document.getElementById("result2");
buttonCheck.onclick = function () {
  if (+inputCheck.value > 0) {
    resultCheck.textContent = "Positive";
  } else if (+inputCheck.value == 0) {
    resultCheck.textContent = "Zero";
  } else {
    resultCheck.textContent = "Negative";
  }
};
// Задание3
let inputEvenCheck = document.getElementById("numberEvenCheck");
let buttonEvenCheck = document.getElementById("buttonEvenCheck");
let resultEvenCheck = document.getElementById("result3");

buttonEvenCheck.onclick = function () {
  if (+inputEvenCheck.value % 2 == 0) {
    resultEvenCheck.textContent = "Yes";
}  else if (+resultEvenCheck.value % 2 != 1) { resultEvenCheck.textContent = "No";}
};

// Задание4
let inputCalc1 = document.getElementById("numberCalc1");
let inputCalc2 = document.getElementById("numberCalc2");
let buttonCalc = document.getElementById("buttonCalc");
let resultCalc = document.getElementById("result4");
buttonCalc.onclick = function () {
  resultCalc.textContent = calc(+inputCalc1.value, +inputCalc2.value);
};
function calc(a, b) {
  let plus = a + b;
  let minus = a - b;
  let umnoj = a * b;
  let delit = a / b;
  return 'Сложение: ' + plus + ";  Вычитание: " + minus + "; Умножение: " + umnoj + "; Деление: " + delit;
}

// Задание5
let lenght = document.getElementById("lenght");
let circumference = document.getElementById("talia");
let gender = document.getElementById("gender");
let button = document.getElementById("getFat");
let resultGender = document.getElementById("result5");

button.onclick = function () {
  if (gender.value == "man") {
    resultGender.textContent = 64 - (20 * +lenght.value) / +circumference.value;
  } else {
    resultGender.textContent = 76 - (20 * +lenght.value) / +circumference.value;
  }
};