var count = 0;


function generate() {
   var number1 = document.getElementById('num1').value;
   var color = document.getElementById('color').value;

   for (let i = 0; i < number1; i++) {
      count++;
      var btn = document.createElement("button");
      btn.className = "btn1";
      btn.innerHTML = "New Button " + count;
      btn.style = "background-color:" + (color) + ";"
      if (color == "#000000") {
         btn.style.color = "#fff";
      }
      document.body.appendChild(btn);
   }

}