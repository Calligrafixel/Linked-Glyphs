const _text = document.querySelector("#text");

window.addEventListener("keyup", (e) => {
    const key = document.getElementById(e.key);
    const line = _text.value;
    
    if(line.length > 1) {
    
        switch(line[line.length - 1]) {
            case "글":
                if(line[line.length - 2] == "한") {
                    _text.value = _text.value.slice(0, -1) + "⑦글";
                }
                break;
            case "꼴":
                if(line[line.length - 2] == "글") {
                    _text.value = _text.value.slice(0, -1) + "⑤꼴";
                }
                break;
            case "구":
                if(line[line.length - 2] == "연") {
                    _text.value = _text.value.slice(0, -1) + "③구";
                }
                break;
            case "회":
                if(line[line.length - 2] == "구") {
                    _text.value = _text.value.slice(0, -1) + "②④회";
                }
                break;
            default:
                break;
        }
    }
});