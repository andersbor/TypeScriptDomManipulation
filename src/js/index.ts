let nameButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nameButton");
nameButton.value = "hallo";
nameButton.addEventListener("click", sayHello);

function sayHello(): void {
    let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("nameInput");
    let name: string = nameInput.value;
    let nameOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("nameOutput");
    nameOutput.innerHTML = "Hello " + name;
}

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showHideButton");
button.addEventListener("click", () => {
    console.log(element.style.display);
    if (element.style.display === "block") {
        element.style.display = "none";
        button.innerText = "Show";
    } else {
        element.style.display = "block";
        button.innerText = "Hide";
    }
});

let liste = null;

let list: HTMLOListElement = <HTMLOListElement>document.getElementById("list");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");
let buttonAdd: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addButton");
buttonAdd.addEventListener("click", addListElement);

function addListElement(): void {
    let word: string = inputElement.value;
    console.log(word);
    let listElement: HTMLLIElement = document.createElement("li");
    listElement.innerHTML = word;
    list.appendChild(listElement);
    console.log("list element appended");
    listElement.addEventListener("copy", () => { // copy = Ctrl+c
        list.removeChild(listElement);
    });
}

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
inputElement.addEventListener("keypress", (keyEvent: KeyboardEvent) => {
    //if (keyEvent.keyCode === 13) // "Enter" key (deprecated)
    if (keyEvent.code == "Enter") // https://keycode.info/
    {
        addListElement();
    }
})