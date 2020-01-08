var tasklist: string[] = ["Get snacks for New Year´s Eve", "Visit the family", "Complete this prototype"];

window.addEventListener("load", function (): void {
  document.querySelector("#create").addEventListener("click", addtoTaskList);
  document.querySelector(".tasks").addEventListener("click", changebutton);
  document.querySelector("#sumTasks").innerHTML = tasklist.length.toString();

  buildHTML();


  function addtoTaskList(): void {
    var input: HTMLInputElement = document.querySelector("#newtask");
    tasklist.push(input.value);
    input.value = "";
    buildHTML();
    document.querySelector("#sumTasks").innerHTML = tasklist.length.toString();
  }

  function buildHTML(): void {
    var tasks: HTMLElement = document.querySelector(".tasks");
    tasks.innerHTML = "";
    for (var index: number = 0; index < tasklist.length; index++) {
      var tasks: HTMLElement = document.querySelector(".tasks");

      tasks.innerHTML += "<div class='line'><i id='uncheck' class='far fa-circle fa-2x'></i>" + tasklist[index] + "<i id='trash'class='far fa-trash-alt fa-2x'></i></div>";


    }
    
  }




});


function changebutton(): void {

  var dieButtons: HTMLElement = document.querySelector("#uncheck");


  if (dieButtons.classList.contains("fa-circle")) {
    dieButtons.classList.remove("fa-circle");
    dieButtons.classList.add("fa-check-circle");

  }

  else {
    dieButtons.classList.remove("fa-check-circle");
    dieButtons.classList.add("fa-circle");
  }

}


/*
function removeTask(): void {
  var input: HTMLInputElement = document.querySelector("#newtask");
  tasklist.pop(input.value);
  */