/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Cas Fleming
      Date: 01.14.24

      Filename: project02-01.js
 */

let cDegree = document.getElementById("cValue");
let fDegree = document.getElementById("fValue");

function CelsiusToFahrenheit (degree) {
    fDegree.value = (degree * 1.8) + 32;
}

function FahrenheitToCelsius (degree) {
    cDegree.value = (degree - 32) / 1.8;
}

cDegree.addEventListener("change", function(event) {CelsiusToFahrenheit(cDegree.value)});
fDegree.addEventListener("change", function(event) {FahrenheitToCelsius(fDegree.value)});
