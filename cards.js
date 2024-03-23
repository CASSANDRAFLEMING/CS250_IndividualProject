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
        let newDiv = document.createElement("DIV")
        newDiv.innerHTML = `
       <p>Card name: ${this.name}</p>
       <p>Card type: ${this.type}</p>
       <p>Card description: ${this.desc}</p>
       <p>-----</p>
    `
        flashcards.append(newDiv);
    }

    createCookie(){
        document.cookie=`cardName${this.name}&cardType=${this.type}&cardDesc=${this.desc}; domain=whisky.com; secure; expires=Fri, 29 Mar 2024 00:00:00 GMT`
    }
}

let flashcards = document.getElementById("flashcards");
let button = document.getElementById("submit");
let name = document.querySelector("#name");
let type = document.querySelector("#type");
let description = document.querySelector("#desc");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let newCard = new createCard(name.value, type.value, description.value);
    newCard.addCard();
    newCard.createCookie();

})