function formatText(command) {
    document.execCommand(command, false, null);
}

function changeColor(color) {
    document.execCommand("foreColor", false, color);
}

function changeFont(font) {
    document.execCommand("fontName", false, font);
}

function alignText(align) {
    document.execCommand("justify" + align, false, null);
}

function clearPlaceholder() {
    let editor = document.getElementById("editor");
    if (editor.innerText.trim() === "Escribe aquí...") {
        editor.innerText = "";
        editor.style.color = "black";
    }
}

function restorePlaceholder() {
    let editor = document.getElementById("editor");
    if (editor.innerText.trim() === "") {
        editor.innerText = "Escribe aquí...";
        editor.style.color = "#888";
    }
}
