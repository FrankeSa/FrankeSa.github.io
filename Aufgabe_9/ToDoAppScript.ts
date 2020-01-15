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
    for (let index: number = 0; index < tasklist.length; index++) {
      var tasks: HTMLElement = document.querySelector(".tasks");

      tasks.innerHTML += "<div class='line'><i id='uncheck' class='far fa-circle fa-2x'></i>" + tasklist[index] + "<i id='trash'class='far fa-trash-alt fa-2x'></i></div>";


    }
    
    
  }




});


function changebutton(_event: Event): void {

  
  var derButton: HTMLElement = <HTMLElement>_event.target;
  //Unterscheidung zwischen Löschen und checked button
  if (derButton.classList.contains("fa-circle")) {
    derButton.classList.remove("fa-circle");
    derButton.classList.add("fa-check-circle");

  }

  else if (derButton.classList.contains("fa-check-circle")){
    derButton.classList.remove("fa-check-circle");
    derButton.classList.add("fa-circle");
  }
  else 
  {
    deletetask(index);
    
     
      console.log("delete");
    }
  

}

document.querySelector("#trash").addEventListener("click", function (): void {
    
  deletetask(index);
});

function deletetask(index: number): void {
  
  tasklist.splice(index, 1);
}

buildHTML();