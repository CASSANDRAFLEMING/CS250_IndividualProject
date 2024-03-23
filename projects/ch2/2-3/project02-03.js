/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Cas Fleming
      Date: 01.20.2024

      Filename: project02-03.js
 */

let randomDate = new Date();
console.log(randomDate);

let feedback = document.getElementById('feedback');
console.log(feedback);

document.getElementById('square').addEventListener('mouseover', (e) => feedback.innerHTML = "You hovered over the square.");
document.getElementById('square').addEventListener('mouseout', (e) => feedback.innerHTML = "");
document.getElementById('circle').addEventListener('mouseover', (e) => feedback.innerHTML = "You hovered over the circle.");
document.getElementById('circle').addEventListener('mouseout', (e) => feedback.innerHTML = "");
document.getElementById('triangle').addEventListener('mouseover', (e) => feedback.innerHTML = "You hovered over the triangle.");
document.getElementById('triangle').addEventListener('mouseout', (e) => feedback.innerHTML = "");