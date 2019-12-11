/* Aufgabe 7.1: Wenn auf einen Button geklickt wird, dann wird eine anonyme Funktion aufgerufen die die Funktion Play abspielt.
In Play sind die String Übergabeparameter festgelegt */

var periode: number;

window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { play("kick.mp3") });
    document.querySelector("#button2").addEventListener("mousedown", function () { play("snare.mp3") });
    document.querySelector("#button3").addEventListener("mousedown", function () { play("hihat.mp3") });
    document.querySelector("#button4").addEventListener("mousedown", function () { play("F.mp3") });
    document.querySelector("#button5").addEventListener("mousedown", function () { play("G.mp3") });
    document.querySelector("#button6").addEventListener("mousedown", function () { play("A.mp3") });
    document.querySelector("#button7").addEventListener("mousedown", function () { play("C.mp3") });
    document.querySelector("#button8").addEventListener("mousedown", function () { play("laugh-1.mp3") });
    document.querySelector("#button9").addEventListener("mousedown", function () { play("laugh-2.mp3") });
    document.querySelector("#plbtn").addEventListener("click", changebutton);
    document.querySelector("#record").addEventListener("click", recordsound);
    document.querySelector("#trashbtn").addEventListener("click", deletesound);
});

/* Diese Funktion spielt das Audio ab, je nach gedrücktem Button */

function play(tones: string): void {

    var sound: HTMLAudioElement = new Audio("assets/" + tones);
    sound.play();
    if (record == true) {
        sounds.push(tones);
    }

}

function changebutton(): void {

    var dieButtons: HTMLElement = document.getElementById("plbtn");

    /* Playbutton wird in Pausebutton geändert */
    if (dieButtons.classList.contains("fa-play-circle")) {
        dieButtons.classList.remove("fa-play-circle");
        dieButtons.classList.add("fa-pause-circle");
        periode = setInterval(playbutton, 500);
    }
    /* Pausebutton wird in Playbutton geändert */
    else {
        dieButtons.classList.remove("fa-pause-circle");
        dieButtons.classList.add("fa-play-circle");
        clearInterval(periode);
    }

}


/* Aufgabe 7.2: Mit Arrys und Index eine Tonabfolge festlegen und abspielen */

var sounds: string[] = ["hihat.mp3", "A.mp3", "G.mp3", "F.mp3", "F.mp3", "G.mp3", "C.mp3", "A.mp3", "laugh-2.mp3"];



var index: number = 0;
function playbutton() {
    play(sounds[index])
    index = index + 1;
    if (index > sounds.length)
        index = 0;
    console.log(sounds[index]);
}



/* record button */

var record: boolean = false;

function recordsound (): void {

    if (record == true) {
        record = false;
        console.log("record ist on");

    }
    else {
        record = true;
        console.log("record ist off");
        
    }
}
 

function deletesound (): void {
    
        sounds = [];    

}

/*Samples von freesound.org, Creative Commons 0 License*/
