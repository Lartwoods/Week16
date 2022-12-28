let x = 0;
let Mass = [];

function add_element_to_array() {
  Mass[x] = document.getElementById("text1").value;

  x++;
  document.getElementById("text1").value = "";
}

function display_array() {
  let list = "";

  for (let y = 0; y < Mass.length; y++) {
    list += Mass[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = list;
}
button2.addEventListener("click", function () {
  let counter = 0;
  for (let number of Mass) {
    counter = counter + +number;
    sum.innerHTML = counter;
  }
});
let sortMass = Mass.sort(function (a, b) {
  if (a < b) return -1;
  console.log(a, b);
  document.getElementById("Result").innerHTML = list;
});
