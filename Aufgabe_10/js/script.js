var todos = {
    text: ["Lorem", "Ipsum", "Dolor"],
    checked: [true, false, false]
};
/**var todosText: string[] =       ["Lorem" , "Ipsum" , "Dolor"];
var todosChecked: boolean[] =    [true    , false   , false];  */
/**
 * Die Anwendung wird immer wieder auf die selben
 * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
 * jedes mal neu selektiert werden müssen, werden hier
 * Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function () {
    /**
     * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
     * in ihre Variablen gespeichert werden, um später auf sie
     * zugreifen zu können
     */
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    /**
     * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
     * auf den AddToDo Button gesetzt werden.
     */
    addButtonDOMElement.addEventListener("click", addTodo);
    /**
     * Initial soll einmal die Liste an bereit definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
    drawListToDOM();
});
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        var todo = document.createElement("div");
        /*document.createElement("div") mit let todo können wir den div ansprechen*/
        todo.classList.add("todo");
        /**
         * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
         * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
         *
         * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
         * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
         * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
         * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
         * hier muss die Zeichenkette unterbrochen werden.
         */
        todo.innerHTML = "<span class='check " + todos.checked[index_1] + "'><i class='fas fa-check'></i></span>"
            + todos.text[index_1] +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
            deleteTodo(index_1);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index_1 = 0; index_1 < todos.text.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    var unchecked = 0;
    var checked = 0;
    for (var index = 0; index < todos.checked.length; index++) {
        if (todos.checked[index] == true) {
            checked++;
        }
        else {
            unchecked++;
        }
    }
    counterDOMElement.innerHTML = todos.text.length + " in total | " + checked + " done  | " + unchecked + " open";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird
         * als neues Element in das ToDo-Array gepusht.
         * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
         * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
         * der Status "unchecked", hier false, gepusht.
         */
        todos.text.unshift(inputDOMElement.value);
        todos.checked.unshift(false);
        /*in das Array wird der Value und false gepuscht!*/
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    todos.checked[index] = !todos.checked[index];
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    todos.text.splice(index, 1);
    /* splice(index ist der Übergabewert, an dem Pkt. wo sich die Schleife gerade befindet bzw. wo ich gerade klicke, 1 bedeutet dass nur ein Wert enfert wird)
   */ todos.checked.splice(index, 1);
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        // Sternchen * = wildcard 
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log(wildcard);
            todos.text.unshift(wildcard);
            todos.checked.unshift(false);
            drawListToDOM();
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map