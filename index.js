
let menu = document.getElementById("menukaart");
let leeg = [];
let menukaart = [
    "Spaghetti met ham en kaas",
    "<br> Macaroni met ham en kaas",
    "<br> Tagliatelli met ham en kaas",
    "<br> Spaghetti ppmet spinazie en room",
    "<br> Macaroni met spinazie en room",
    "<br> Tagliatelli met spinazie en room",
    "<br> Spaghetti met gehakt-tomatensaus en kaas",
    "<br> Macaroni met gehakt-tomatensaus en kaas",
    "<br> Tagliatelli met gehakt-tomatensaus en kaas",
    "<br> Spaghetti met spekjes, spinazie en room",
    "<br> Macaroni met spekjes, spinazie en room",
    "<br> Tagliatelli met spekjes, spinazie en room",
    "<br> Spaghetti met courgette en tomatensaus",
    "<br> Macaroni met courgette en tomatensaus",
    "<br> Tagliatelli met courgette en tomatensaus",
    "<br> Lasagne met courgette en tomatensaus",
    "<br> Lasagne met room, doperwten en tomatensaus",
    "<br> Lasagne met spinazie en tomatensaus en kaas"];
menu.innerHTML = menukaart;
let menukaart1 = menukaart[0];
let menukaart2 = menukaart[1];
let menukaart3 = menukaart[2];
let menukaart4 = menukaart[3];
let menukaart5 = menukaart[4];
let menukaart6 = menukaart[5];
let menukaart7 = menukaart[6];
let menukaart8 = menukaart[7];
let menukaart9 = menukaart[8];
let menukaart10 = menukaart[9];
let menukaart11 = menukaart[10];
let menukaart12 = menukaart[11];
let menukaart13 = menukaart[12];
let menukaart14 = menukaart[13];
let menukaart15 = menukaart[14];
let menukaart16 = menukaart[15];
let menukaart17 = menukaart[16];
let menukaart18 = menukaart[17];


// addNumberToArrayElement(number= 17);




// function addNumberToArrayElement(number) {
//     for (let count = 0; count < menukaart.length; count++) {
//         console.log(numbers[i] + number);
//     }
// }
console.log(menukaart.length);


showElement(0);


showElement(10);
  function showElement(index){


  console.log(menukaart[index]);
}
// menukaart.push("pannenkoek met ananas");
// menukaart.unshift("pannenkoek met banaan");

multipleElement(6, 10);

function multipleElement(van, tot){
console.log(van);
console.log(tot);
}

menukaart.reverse();