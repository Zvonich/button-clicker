var points = 0;

function pointClick(number){
    points = points + number;
    document.getElementById("points").innerHTML = points;

};   

document.getElementById("10p").style.display = "none"
var mainGameLoop = window.setInterval(function() {
    if(points >= 10) {                                                           //change 10 when launching game
        document.getElementById("10p").style.display = "inline-block"
    }

  }, 1000)
 
document.getElementById("100p").style.display = "none"
var mainGameLoop = window.setInterval(function() {
    if(points >= 100) {                                                           //change 100 when launching game
        document.getElementById("100p").style.display = "inline-block"
    }

  }, 1000)

document.getElementById("1000p").style.display = "none"
var mainGameLoop = window.setInterval(function() {
      if(points >= 1000) {                                                           //change 1000 when launching game
          document.getElementById("1000p").style.display = "inline-block"
      }
  
    }, 1000)
   
