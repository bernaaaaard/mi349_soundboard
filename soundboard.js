document.getElementById("skidsfx").addEventListener("click", function(){
    var audio = new Audio('sfx/car_skid.wav');
    audio.play();
})

document.getElementById("springsfx").addEventListener("click", function(){
    var audio = new Audio('sfx/boing_x.wav');
    audio.play();
})

document.getElementById("registersfx").addEventListener("click", function(){
    var audio = new Audio('sfx/cash_register2.wav');
    audio.play();
})
