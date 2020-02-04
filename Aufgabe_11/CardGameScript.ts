interface Kartendeck {
    Wert: number;
    Farbe: string;

}

var ziehstapel: Kartendeck[] = [

    { Wert: 0, Farbe: "rot" }, { Wert: 1, Farbe: "rot" }, { Wert: 2, Farbe: "rot" }, { Wert: 3, Farbe: "rot" }, { Wert: 4, Farbe: "rot" },
    { Wert: 5, Farbe: "rot" }, { Wert: 6, Farbe: "rot" }, { Wert: 7, Farbe: "rot" }, { Wert: 0, Farbe: "blau" }, { Wert: 1, Farbe: "blau" },
    { Wert: 2, Farbe: "blau" }, { Wert: 3, Farbe: "blau" }, { Wert: 4, Farbe: "blau" }, { Wert: 5, Farbe: "blau" }, { Wert: 6, Farbe: "blau" },
    { Wert: 7, Farbe: "blau" }, { Wert: 0, Farbe: "grün" }, { Wert: 1, Farbe: "grün" }, { Wert: 2, Farbe: "grün" }, { Wert: 3, Farbe: "grün" },
    { Wert: 4, Farbe: "grün" }, { Wert: 5, Farbe: "grün" }, { Wert: 6, Farbe: "grün" }, { Wert: 7, Farbe: "grün" }, { Wert: 0, Farbe: "gelb" },
    { Wert: 1, Farbe: "gelb" }, { Wert: 2, Farbe: "gelb" }, { Wert: 3, Farbe: "gelb" }, { Wert: 4, Farbe: "gelb" }, { Wert: 5, Farbe: "gelb" },
    { Wert: 6, Farbe: "gelb" }, { Wert: 7, Farbe: "gelb" }

];
var gegnerHand: Kartendeck[] = [];
var ablagestapel: Kartendeck[] = [];
var spielerHand: Kartendeck[] = [];

var gegner_deck: HTMLElement;
var player_deck: HTMLElement;
var Ziehstapel: HTMLElement;
var Ablagestapel: HTMLElement;


window.addEventListener("load", function (): void {

    gegner_deck = document.querySelector(".Gegner");
    player_deck = document.querySelector(".Player");
    Ziehstapel = document.querySelector(".Ziehstapel");
    Ablagestapel = document.querySelector(".Ablagestapel");
    Ziehstapel.addEventListener("click", function (): void {
        Karte_ziehen();
    });

    shuffel();
    Austeilen();
    createDeckPlayer();
    createDeckAblage();
    createDeckGegner();

});

//Erstellt eine Karte für den Ziehstapel






// Kartenstapel wird gemischt, alle 32 Karten sodass bei jedem Neustart das Array anders aufgestellt ist
function shuffel(): void {
    for (let i: number = ziehstapel.length - 1; i > 0; i--) { // die Variable i ist die Länge des Kartenstapels
        var zufall: number = Math.floor(Math.random() * 32); // die Variable zufall erstellt eine zufällige Zahl mal meine 32 Karten
        var tausch: Kartendeck = ziehstapel[i];
        ziehstapel[i] = ziehstapel[zufall]; // Karten werden getauscht
        ziehstapel[zufall] = tausch; // Karten werden getauscht

    }
}

function Austeilen(): void {
    for (let index: number = 0; index < 3; index++) {
        gegnerHand.push(ziehstapel[0]); // in die Gegner-Hand wird die erste Karte vom Ziehstapel-Array gepusht
        ziehstapel.splice(0, 1); // die erste Karte vom Ziehstapel-Arry wird entfernt
        spielerHand.push(ziehstapel[0]);// die erste Karte vom Ziehstapel-Arry wird in das Spieler-Array gepusht
        ziehstapel.splice(0, 1);// die erste Karte vom Ziehstapel-Arry wird entfernt

    }
    for (let index: number = 0; index < 1; index++) {
        ablagestapel.push(ziehstapel[0]); // Hier wird eine Karte in das Ablagestapel-Array gepusht
        ziehstapel.splice(0, 1);
    }
    // console.log(gegnerHand);
    //console.log(ablagestapel);
    //console.log(spielerHand);

}


// Hier werden für den Spieler drei Karten in den DOM gezeichnet
function createDeckPlayer(): void {

    for (let index: number = 0; index < 3; index++) {

        var newcard: HTMLElement = document.createElement("div");
        if (spielerHand[index].Farbe == "rot") {
            newcard.className = "rot";
        }
        else if (spielerHand[index].Farbe == "grün") {
            newcard.className = "grün";
        }
        else if (spielerHand[index].Farbe == "blau") {
            newcard.className = "blau";
        }
        else (newcard.className = "gelb");


        newcard.innerHTML += spielerHand[index].Wert;
        document.querySelector(".Player").appendChild(newcard);
        newcard.addEventListener("click", function (): void {
            Player_Zug(index);
        });



    }

}


function Player_Zug(index): void {

    if (spielerHand[index].Farbe == ablagestapel[0].Farbe || spielerHand[index].Wert == ablagestapel[0].Wert) {


        ablagestapel.unshift(spielerHand[index]);       // die geklickte Karte aus der Spieler-Hand wird in das Ablagestapel-Array gepusht
        spielerHand.splice(index, 1);    // die geklickte Karte wird entfernt
      
        
        createDeckAblage();
        
        console.log(spielerHand);
        console.log(ablagestapel);

    }

}


function Karte_ziehen(): void {

    spielerHand.push(ziehstapel[0]); // Die erste Karte auf dem Ziehstapel wird in die Spilerhand gepusht
    ziehstapel.splice(0, 1); // Die Karte wird aus dem Array entfernt

    for (let index: number = 0; index < 1; index++) {

        var newcard: HTMLElement = document.createElement("div");
        if (spielerHand[index].Farbe == "rot") {
            newcard.className = "rot";
        }
        else if (spielerHand[index].Farbe == "grün") {
            newcard.className = "grün";
        }
        else if (spielerHand[index].Farbe == "blau") {
            newcard.className = "blau";
        }
        else (newcard.className = "gelb");


        newcard.innerHTML += spielerHand[index].Wert;
        document.querySelector(".Player").appendChild(newcard);
        newcard.addEventListener("click", function (): void {
            Player_Zug(index);
        });

}}



function createDeckGegner(): void {

    for (let index: number = 0; index < 3; index++) {

        var newcard: HTMLElement = document.createElement("div");
        if (gegnerHand[index].Farbe == "rot") {
            newcard.className = "rot";
        }
        else if (gegnerHand[index].Farbe == "grün") {
            newcard.className = "grün";
        }
        else if (gegnerHand[index].Farbe == "blau") {
            newcard.className = "blau";
        }
        else (newcard.className = "gelb");


        newcard.innerHTML += gegnerHand[index].Wert;
        document.querySelector(".Gegner").appendChild(newcard);


    }

}

function createDeckAblage(): void {

    for (let index: number = 0; index < 1; index++) {

        var newcard: HTMLElement = document.createElement("div");
        if (ablagestapel[index].Farbe == "rot") {
            // console.log(ablagestapel[index].Farbe);
            newcard.className = "rot";
        }
        else if (ablagestapel[index].Farbe == "grün") {
            //  console.log(ablagestapel[index].Farbe);
            newcard.className = "grün";
        }
        else if (ablagestapel[index].Farbe == "blau") {
            // console.log(ablagestapel[index].Farbe);
            newcard.className = "blau";
        }
        else (newcard.className = "gelb");


        newcard.innerHTML += ablagestapel[index].Wert;

        document.querySelector(".Ablagestapel").appendChild(newcard);


    }

}



// Gegner-Funktion
// solange das Kartendeck nicht 0 ist soll mit einer Schleife die Karten verglichen werden. 
/*setTimeout(function Gegner_Zug(): void {
    while (gegnerHand.length != 0) {

        for (let index: number = 0; index <= gegnerHand.length; index++) { //Kleiner gleich die Länge des Arrays
            if (ablagestapel[0].Farbe == gegnerHand[index].Farbe) { // Die erste Karte auf dem Ablagestapel soll mit einer Karte des Gegners verglichen werden und zwar die Farbe
                ablagestapel.unshift(gegnerHand[index]);
                gegnerHand.splice(0, 1);
            }
            else if (ablagestapel[0].Wert == gegnerHand[index].Wert) {
                ablagestapel.unshift(gegnerHand[index]);
                gegnerHand.splice(0, 1);
            }
            else
                alert("Du bist dran");
        }

    }
}, 3000);*/
