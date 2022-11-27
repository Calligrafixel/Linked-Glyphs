const _preview = document.getElementById("preview");
_preview.focus();


const _info = document.getElementById("info_popup");
const _process = document.getElementById("process_popup");

_preview.addEventListener("keypress", (e) => {
    const k = e.keyCode;

    if (k == 49) {
        _info.style.display = "block";
        _process.style.display = "none";
    }
    else if (k == 50) {
        _info.style.display = "none";
        _process.style.display = "block";
    } else if (k == 51) {
        _info.style.display = "none";
        _process.style.display = "none";
    }
});