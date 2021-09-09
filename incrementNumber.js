function incrementButton() {
  var element = document.getElementById("IncrementText");
  var value = element.innerHTML;
  ++value;
  console.log(value);
  document.getElementById("IncrementText").innerHTML = value;
}



<script src="incrementNumber.js"></script>
