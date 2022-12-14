let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let onScreen = ""

for(i of buttons){
    i.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        let audio = document.getElementById("audio");
        audio.play();
        
        if(buttonText=='C'){
            onScreen = onScreen.substring(0,onScreen.length-1);
            screen.value = onScreen;
        }else if(buttonText=='='){
            screen.value = eval(onScreen);
            onScreen = screen.value;
        }else{
            onScreen += buttonText;
            screen.value = onScreen;
        }
    })
}