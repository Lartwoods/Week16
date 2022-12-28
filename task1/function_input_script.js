let x = 0;
let Mass = [];

function add_element_to_array() {
  Mass[x] = document.getElementById("text1").value;

  x++;
  document.getElementById("text1").value = "";
}

function display_array() {
  let e = "<hr/>";

  for (let y = 0; y < Mass.length; y++) {
    e += Mass[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = e;
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
});
console.log(sortMass);
