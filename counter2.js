var integer = document.getElementById("number")
let int = 0;

function changeCount(button) {
    if(button == increment) {
        int ++;
        number.style.color = "green"
    }
    else if(button == decrement) {
        if(int > 0) {
            int--
        }
    }
    else if(button == reset) {
        int = 0;
        number.style.color = "black"
    }
    integer.innerHTML = int;
    
}

