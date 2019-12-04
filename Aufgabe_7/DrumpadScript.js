window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { play("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { play("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { play("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { play("F.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { play("G.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { play("A.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { play("C.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { play("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { play("laugh-2.mp3"); });
});
function play(tone) {
    var sound = new Audio("assets/" + tone);
    sound.play();
}
var sounds = ["hihat.mp3", "A.mp3", "G.mp3", "F.mp3", "F.mp3", "G.mp3", "C.mp3", "A.mp3", "laugh-2.mp3"];
function playbutton() {
    var index = 0;
    setInterval(function () {
        play(sounds[index]);
        index = index + 1;
    }, 900);
}
//# sourceMappingURL=DrumpadScript.js.map