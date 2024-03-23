let cardName;
let cardType;
let cardDescription;

class createCard{
    constructor(cardName, cardType, cardDescription){
        this.name = cardName;
        this.type = cardType;
        this.desc = cardDescription;
    }


    addCard() {
        console.log(this.name);
    }
}

let flashcards = document.getElementById("flashcards");

function createCardElement(formResults){
    let newDiv = document.createElement("DIV")
    newDiv.innerHTML = `
       <p>Card name: ${formResults.name}</p>
       <p>Card type: ${formResults.type}</p>
       <p>Card description: ${formResults.desc}</p>
       <p>-----</p>
    `
    flashcards.append(newDiv);
}


let button = document.getElementById("submit");
let name = document.querySelector("#name");
let type = document.querySelector("#type");
let description = document.querySelector("#desc");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let newCard = new createCard(name.value, type.value, description.value);
    createCardElement(newCard);
})