
var one = 1;

function ClickOne(){
    var firstCost = Math.floor(10 * Math.pow(1.1,one));
    if(money >= firstCost){                                   
        one = one + 1;   
        money = money - firstCost;         
        document.getElementById('firstAmount').innerHTML = one;  
        document.getElementById('money').innerHTML = money;  
        var nextCost = Math.floor(10 * Math.pow(1.1,one));                           
        document.getElementById('firstCost').innerHTML = nextCost; 
    };  
               
 };                   
window.setInterval(function(){       
     moneyClick(one * 100);                                                                 
}, 1000);                

var money = 0;

function moneyClickk(number){
    money = money + number;
    document.getElementById("money").innerHTML = money;
    // progress bar
    var bar = 0;
      if (bar == 0) {
        bar = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          bar = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
};   

            

var two = 0;

function ClickTwo(){
    var secondCost = Math.floor(100 * Math.pow(1.1,two));
    if(money >= secondCost){                                   
        two = two + 1;   
        money = money - secondCost;         
        document.getElementById('secondAmount').innerHTML = two;  
        document.getElementById('money').innerHTML = money;  
        var next2Cost = Math.floor(100 * Math.pow(1.1,two));                           
        document.getElementById('secondCost').innerHTML = next2Cost; 
    };  
               
 };                   
window.setInterval(function(){       
     moneyClick(two * 5);                                                                 
}, 1000);                


function moneyClickk(number){
  money = money + number;
  document.getElementById("money").innerHTML = money;
    // progress bar
    var bar = 0;
    if (bar == 0) {
      bar = 1;
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        bar = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

//document.getElementById("two").style.display = "none"
//var mainGameLoop = window.setInterval(function() {
 //   if(money >= 10) {                                                           
 //      document.getElementById("two").style.display = "inline-block"
  //  }
 // }, 1000)




