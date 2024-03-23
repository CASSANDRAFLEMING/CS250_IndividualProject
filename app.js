
//CH3 additions

let optionsChosen = document.querySelector("#optionChosen");

document.addEventListener("click", (e)=>{
    if (e.target.id == "test"){
        if (e.target.checked){
            if (optionsChosen.textContent == ""){
                optionsChosen.textContent += "You dare to check the box!!! Nothing happens";
            }
            else{
                alert("You already checked the box once!");
            }

        }
    }


})


//CH4 additions & CH 6 additions

let submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let commentType = document.querySelector("#commentType");
let comment = document.querySelector("#comment");

if (submit != null){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        try {
            if (name.value == "" && comment.value == "") throw "Enter a name and a comment!";
            if (name.value == "") throw "Enter a name!";
            if (commentType.value == "Please choose a comment type") throw "Please select a Comment Type";
            if (comment.value == "") throw "Enter a comment!";
            alert("Thank you!");
        } catch (error){
            alert(error);
        }
    })
}

//Chapter 7 additions
let chosenTopics = document.getElementById("chosenTopics");

let unchosenTopics = document.getElementById("unchosenTopics");
let topics = document.getElementsByClassName("topics");
for (let x = 0; x < topics.length; x++){
    topics[x].addEventListener("click", (e)=>{
        console.log(e.target.parentElement);
        if (e.target.checked) {
            if (e.target.parentElement.parentElement.id == "unchosenTopics") {
                chosenTopics.append(e.target.parentNode);
            } else {
                unchosenTopics.append(e.target.parentNode);
            }


        }
    })
}

//Chapter 10



let currentLocation;
let mapPlacement = document.getElementById("map");
function initMap(){
    let pasco = {lat: 46.241539, lng: -119.117393}
    let map = new google.maps.Map(
        map, {zoom: 4, center: pasco}
    )
}
