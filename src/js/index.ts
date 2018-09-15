let nameButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nameButton");
nameButton.value = "hallo";
nameButton.addEventListener("click", () => {
    let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("nameInput");
    let name: string = nameInput.value;
    let nameOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("nameOutput");
    nameOutput.innerHTML = "Hello " + name;
});

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonShowHide");
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

let list: HTMLOListElement = <HTMLOListElement>document.getElementById("list");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");
let buttonAdd: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", addListElement);

function addListElement(): void {
    let word: string = inputElement.value;
    console.log(word);
    let listElement: HTMLLIElement = document.createElement("li");
    listElement.innerHTML = word;
    list.appendChild(listElement);
    console.log("list element appended");
    listElement.addEventListener("copy", () => {
        list.removeChild(listElement);
    });
}

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
inputElement.addEventListener("keypress", (keyEvent: KeyboardEvent) => {
    if (keyEvent.keyCode === 13) // "Enter" key
    {
        addListElement();
    }
})