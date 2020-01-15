var tasklist = ["Get snacks for New Year´s Eve", "Visit the family", "Complete this prototype"];
window.addEventListener("load", function () {
    document.querySelector("#create").addEventListener("click", addtoTaskList);
    document.querySelector(".tasks").addEventListener("click", changebutton);
    document.querySelector("#sumTasks").innerHTML = tasklist.length.toString();
    buildHTML();
    function addtoTaskList() {
        var input = document.querySelector("#newtask");
        tasklist.push(input.value);
        input.value = "";
        buildHTML();
        document.querySelector("#sumTasks").innerHTML = tasklist.length.toString();
    }
});
function buildHTML() {
    var tasks = document.querySelector(".tasks");
    tasks.innerHTML = "";
    for (var index_1 = 0; index_1 < tasklist.length; index_1++) {
        var tasks = document.querySelector(".tasks");
        tasks.innerHTML += "<div class='line'><i id='uncheck' class='far fa-circle fa-2x'></i>" + tasklist[index_1] + "<i id='trash'class='far fa-trash-alt fa-2x'></i></div>";
    }
}
function changebutton(_event) {
    var derButton = _event.target;
    //Unterscheidung zwischen Löschen und checked button
    if (derButton.classList.contains("fa-circle")) {
        derButton.classList.remove("fa-circle");
        derButton.classList.add("fa-check-circle");
    }
    else {
        derButton.classList.contains("fa-check-circle");
        derButton.classList.remove("fa-check-circle");
        derButton.classList.add("fa-circle");
    }
}
//Löschenfunktion
document.querySelector("#trash").addEventListener("click", function () {
    deletetask(index);
});
function deletetask(index) {
    tasklist.splice(index, 1);
}
buildHTML();
//# sourceMappingURL=ToDoAppScript.js.map