const b=document.querySelectorAll(".drum");
for(var i=0;i<b.length;i++){
    b[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML)
});
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
    for(var i=0;i<b.length;i++){
        if(b[i].innerHTML===event.key){
            b[i].style.color="white";
            setTimeout(function(element) {
                element.style.color = "red";
            }, 50,b[i]);
        };
    }
})
function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('./sounds/snare.wa');
            audio.play();
            break;
        case "k":
            var audio=new Audio('./sounds/hihatloop.wav');
            audio.play();
            break;
        case "l":
            var audio=new Audio('./sounds/kick-drum.wav');
            audio.play();
            break;        
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var pressed=document.querySelector("."+currentKey);
    pressed.classList.add("pressed");
    setTimeout(function() {
        pressed.classList.remove("pressed");
    }, 50);
}