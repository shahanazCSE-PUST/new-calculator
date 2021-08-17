const display=document.getElementById('result-id');

function cal(number) {
    display.innerText += number;
};

function clr(){
    display.innerText = '';
}

// function back () {
//     display.innerText= display.innerText.slice(0,-1);
// }
function equal() {
    var result = eval(display.innerText);
    display.innerText=result;

}



function back(){
    previousDisplay=display.innerText;
    display.innerText=previousDisplay.substr(0,previousDisplay.length - 1);
}
    
