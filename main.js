var points = 0;

function pointClick(number){
    points = points + number;
    document.getElementById("points").innerHTML = points;
};   
document.getElementById("p10").style.display = "none"
var mainGameLoop = window.setInterval(function() {
    if(points >= 10) {                                                           //change 10 when launching game
        document.getElementById("p10").style.display = "inline-block"
    }
  }, 1000)
document.getElementById("p100").style.display = "none"
var mainGameLoop = window.setInterval(function() {
    if(points >= 100) {                                                           //change 100 when launching game
        document.getElementById("p100").style.display = "inline-block"
    }
  }, 1000)
document.getElementById("p1000").style.display = "none"
var mainGameLoop = window.setInterval(function() {
      if(points >= 1000) {                                                           //change 1000 when launching game
          document.getElementById("p1000").style.display = "inline-block"
      } 
    }, 1000)

//cursors
var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(points >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        points = points - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('points').innerHTML = points;  //updates the number of cookies for the user
     };
     var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
     document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
 };   
window.setInterval(function(){       
     pointClick(cursors);       
}, 1000);
