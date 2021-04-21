var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

function urlGenerator(txt) {
    return "https://api.funtranslations.com/translate/yoda.json" + "?text=" + txt
}

function errorHandler(){
    alert("Sorry for the inconvenience, we can translate only 5 sentences per hour.\nTry after some time:)")
}

function clickHandler() {
    console.log("clicked!!")
    fetch(urlGenerator(txtInput.value))
    .then(response => response.json())
    .then(json => (txtOutput.innerText = json.contents.translated))
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler );