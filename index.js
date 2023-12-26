var buttons=document.querySelectorAll(".song");
//invoked when a button is being clicked on with the mouse
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){ 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    )}
//invoked when a keyboard button is being pressed
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

var currentAudio; 
//switch for all the buttons to assign the correct audio
function makeSound(key) {
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
        case 'c':
            currentAudio = new Audio("./sounds/onlymp3.to - coldplay___paradise__official_video_-1G4isv_Fylg-192k-1703610896.mp3");
            break;
        case 'm':
            currentAudio = new Audio("./sounds/onlymp3.to - Maroon 5 One More Night Official Music Video -fwK7ggA3-bU-192k-1703611148.mp3");
            break;
        case 'b':
            currentAudio = new Audio("./sounds/onlymp3.to - Mark Ronson Uptown Funk Official Video ft. Bruno Mars-OPf0YbXqDm0-192k-1703611212.mp3");
            break;
        case 'e':
            currentAudio = new Audio("./sounds/onlymp3.to - eminem___without_me__official_music_video_-YVkUvmDQ3HY-192k-1703611292.mp3");
            break;
        case 'd':
            currentAudio = new Audio("./sounds/onlymp3.to - Dire Straits Sultans Of Swing Official Music Video -h0ffIJ7ZO4U-192k-1703611419.mp3");
            break;
        case 'r':
            currentAudio = new Audio("./sounds/onlymp3.to - Red Hot Chili Peppers Dani California Official Music Video -Sb5aq5HcS1A-192k-1703611370.mp3");
            break;
        case 'a':
            currentAudio = new Audio("./sounds/onlymp3.to - Avicii Wake Me Up Official Video -IcrbM1l_BoI-192k-1703612276.mp3");
            break;
        default:
            alert("No Artist found!");
            return;
    }

    currentAudio.play();
}

//applies the animation of the button being clicked on to the styles
function buttonAnimation(currentKey){ 
    var activeButton=document.querySelector("."+currentKey); 
    activeButton.classList.add("pressed"); 
    setTimeout(function(){activeButton.classList.remove("pressed");},150); 
}
