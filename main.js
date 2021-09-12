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
    if(points >= 100) {                                                           //change 100 when launching game               //   CHANGE IF POINT >= 1
        document.getElementById("p100").style.display = "inline-block"
    }                          
  }, 1000)
document.getElementById("p1000").style.display = "none"
var mainGameLoop = window.setInterval(function() {
      if(points >= 1000) {                                                           //change 1000 when launching game
          document.getElementById("p1000").style.display = "inline-block"
      } 
    }, 1000)

//generators
var generators = 0;

function buyGenerators(){
    var generatorCost = Math.floor(10 * Math.pow(1.1,generators));     //works out the cost of this generator
    if(points >= generatorCost){                                   //checks that the player can afford the generator
        generators = generators + 1;                                   //increases number of generators
        points = points - generatorCost;                          //removes the cookies spent
        document.getElementById('generators').innerHTML = generators;  //updates the number of generators for the user
        document.getElementById('points').innerHTML = points;  //updates the number of cookies for the user
     };
     var nextCost = Math.floor(10 * Math.pow(1.1,generators));       //works out the cost of the next generator
     document.getElementById('generatorCost').innerHTML = nextCost;  //updates the generator cost for the user
 };   
window.setInterval(function(){       
     pointClick(generators);       
}, 1000);
