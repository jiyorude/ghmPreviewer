const markIn = document.querySelector("#editor");
const htmlOut = document.querySelector("#preview")

markIn.addEventListener("input", function() {
    htmlOut.innerHTML = marked(markIn.value)
});