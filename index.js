let arrayMenu = [
    "Spaghetti met spekjes, spinazie en room",
    "Macaroni met spekjes, spinazie en room",
    "Tagliatelli met spekjes, spinazie en room",
    "Spaghetti met courgette en tomatensaus",
    "Macaroni met courgette en tomatensaus",
    "Tagliatelli met courgette en tomatensaus",
    "Lasagne met courgette en tomatensaus",
];

let displayMenuElement = document.getElementById("menu");
let displayMenuElementSpecific = document.getElementById("menuSpecific");
let displayMenuElementSpecificReturn = document.getElementById("menuSpecificReturn");
let displayMenuElementMeerdere = document.getElementById("menuMeerdere");
let displayMenuText = "";

function displayMenu() {
    displayMenuText = "";
    displayMenuElement.innerHTML = displayMenuText;
    for(x = 0; x <= arrayMenu.length -1; x++){
        displayMenuText += (x + 1) + ". " + arrayMenu[x] + "<br>";
        displayMenuElement.innerHTML = displayMenuText;
    }
}

function displayMenuSpecific(number) {
    displayMenuText = "";
    displayMenuElementSpecific.innerHTML = arrayMenu[number];
}

function displayMenuSpecificReturn(number) {
    displayMenuText = "";
    displayMenuElementSpecificReturn.innerHTML = arrayMenu[number];
    return arrayMenu[number];
    stopInNieuw();
}
stopInNieuwArray = [];

function stopInNieuw(){
    arrayMenu.push(arrayMenu[4]);
    console.log(stopInNieuwArray);
}

function displayMenuMeerdere(number) {
    displayMenuText = "";
    displayMenuElementMeerdere.innerHTML = arrayMenu[number];
    displayMenuElementMeerdere.innerHTML += arrayMenu[number + 1];
    displayMenuElementMeerdere.innerHTML += arrayMenu[number + 2];
    displayMenuElementMeerdere.innerHTML += arrayMenu[number + 3];
    displayMenuElementMeerdere.innerHTML += arrayMenu[number + 4];
}
