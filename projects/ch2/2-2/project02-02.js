/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Cas Fleming
      Date: 01.14.24

      Filename: project02-02.js
 */



function verifyForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    if (!name.value || !email.value || !phone.value) {
        window.alert("Please fill in all fields");
    } else {
        window.alert("Thank you!");
    }
}

document.getElementById("submit").addEventListener("click", (e) => verifyForm())

//on submit, we need to test that all the fields are entered, if not we give a prompt advising the user to fill out the rest of the fields. If so, alert for the same.

