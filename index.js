for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function()
    {
        var key = this.innerHTML;
        cretenoise(key);

        addanimation(key);
    });
}

document.addEventListener("keypress", function(event)
{
    cretenoise(event.key);
    addanimation(event.key);
});

function cretenoise(current)
{
    if(current === "w")
    {
        var audio = new Audio('tom-1.mp3');
        audio.play();
    }
    if(current === "a")
    {
        var audio = new Audio('tom-2.mp3');
        audio.play();
    }
    if(current === "s")
    {
        var audio = new Audio('tom-3.mp3');
        audio.play();
    }
    if(current === "d")
    {
        var audio = new Audio('tom-4.mp3');
        audio.play();
    }
    if(current === "j")
    {
        var audio = new Audio('snare.mp3');
        audio.play();
    }
    if(current === "k")
    {
        var audio = new Audio('crash.mp3');
        audio.play();
    }
    if(current === "l")
    {
        var audio = new Audio('kick-bass.mp3');
        audio.play();
    }
}

function addanimation(currentkey){
    document.querySelector("." + currentkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentkey).classList.remove("pressed");
    }, 300);
}