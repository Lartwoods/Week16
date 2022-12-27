let myNumbers = [];
let enter = document.getElementById("inputNumber");
let nexT = document.getElementById("button_next");

nexT.addEventListener("click", function () {
  let a = enter.value;
  myNumbers.push(a);
  enter.value = "";
});

let ready = document.getElementById("input_ready");
let myMass = document.getElementsByClassName("array");
let sumRes = document.getElementsByClassName("sum");

ready.addEventListener("click", function () {
  myMass.innerHTML = myNumbers.join("");
});
ready.addEventListener("click", function () {
  let counter = 0;
  for (let number of myNumbers) {
    counter = counter + +number;
    sumRes.innerHTML = counter;
  }
});

document.getElementById("inputReady").onclick = myClick;
function myClick() {
  for (j = 0; i < myNumbers.lenght; j++) {
    for (let i = 0; i < myNumbers.lenght - 1; i++) {
      let a = myNumbers[i],
        b = myNumbers[i + 1];
      if (a > b) {
        let temp = a;
        a = b;
        b = temp;
      }
    }
  }
  myNumbers[i] = a;
  myNumbers[i + 1] = b;
}
