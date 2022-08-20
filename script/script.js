$(".hamburger").click(function(){
    $(this).toggleClass("active")
    $(".navigation-menu").toggleClass("active");
});

$(".navigation-item").click(function(){
    $(".hamburger").toggleClass("active")
    $(".navigation-menu").toggleClass("active");
})

let numberVideo = 0;
const allVideo = document.getElementsByClassName("home__video")
let timeOut = 14000;


function slider(){

    for(let i = 0; i < allVideo.length; i++){
    
        allVideo[i].style.display = "none";
        
      }
      
      if(numberVideo >= allVideo.length){
        
        numberVideo = 0;
        
      }
      allVideo[numberVideo].style.animation = "videofade .8s";
      allVideo[numberVideo].style.display = "block";
      numberVideo++;
      
      if(numberVideo == 1){
        timeOut = 9000;
        console.log(timeOut)

      }
      
      if(numberVideo == 2){
        timeOut = 14000;
        console.log(timeOut)
      }

      if(numberVideo == 3){
        timeOut = 7000;
        console.log(timeOut)
      }

      if(numberVideo == 4){
        timeOut = 17000;
        console.log(timeOut)
      }

      setTimeout(slider, timeOut);
      
      console.log(numberVideo)
}

slider()


function alertSoon(){
  alert("Wkrótcę...")
}

function alertYourLink(){
  alert("Miejsce na Twoje linki do mediów")
}