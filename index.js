$("h1").click( function(event) {
    $("h1").html("We Are The BEST");
    makeSound();
    setTimeout(function() {
        $("h1").html("Lonerd Tech") 
      }, 1000);
})

$h1.addEventListener("click", function(event){
    makeSound(event);
    
})


function makeSound(){

    var tom1 = new Audio("asssets/audio/onload.mp3");
    tom1.play();

    }
    



