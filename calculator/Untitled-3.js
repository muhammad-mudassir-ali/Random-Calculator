
const display=document.getElementById("display")

function appendToDisplay(input){
    display.value+=input;

}

function cleardisplay(){
    display.value=" ";
}

function calculate(){

    try{

        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}

function random(){
    let r=Math.floor(Math.random()*101);
    display.value=r

}
