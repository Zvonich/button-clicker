function incrementButton1() {
  var element = document.getElementById("IncrementText");
  var value = element.innerHTML;
  ++value;
  console.log(value);
  document.getElementById("IncrementText").innerHTML = value
}


function incrementButton10() {
  let x = 9
  var element = document.getElementById("IncrementText");
  var value = element.innerHTML;
  x++value;
  console.log(value);
  document.getElementById("IncrementText").innerHTML = value
}
