function talker() {
  document.querySelector("#heading").innerHTML = "The MERN Stack Rocks";
  document.querySelector("#heading").style.color = "red";
}

//counter classwork
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#btn-counter")
    .addEventListener("click", counterHandler);

  // document.querySelector("#btn-counter").onclick = counterHandler;
});

let num = 0;
function counterHandler() {
  num++;
  document.querySelector(".counter-id").innerHTML = num;
  document.querySelector(".counter-id").style.color = "blue";
}

//FIZZ BUZZ classwork
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-fizz").onclick = fizzAlgo;
});

let counter = 0;

const fizzAlgo = () => {
  counter++;
  document.querySelector("#fizzbuzz").innerHTML = counter;
  if (typeof counter !== "number") {
    alert(`please enter a valid number`);
  }
  if (counter % 3 === 0 && counter % 5 === 0) {
    alert(`${counter} - FizzBuzz`);
  } else if (counter % 5 === 0) {
    alert(`${counter} - Buzz`);
  } else if (counter % 3 === 0) {
    alert(`${counter} - Fizz`);
  }
};

//post
const theValue = document.querySelector("#text-box").value;
console.log(theValue);

// document.addEventListener("DOMContentLoaded", function () {
  

//   const submit = document.querySelector("#theForm");
//   submit.addEventListener("submit", function (e) {
//     e.preventDefault();
//     document.querySelector("#msgbox").innerHTML = theValue;
//   });
// });

//change color of texts via different buttons
//red
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#hello");

  document.querySelector("#red").onclick = function () {
    header.style.color = "red";
  };
  //blue
  document.querySelector("#blue").onclick = function () {
    header.style.color = "blue";
  };
  //green
  document.querySelector("#green").onclick = function () {
    header.style.color = "green";
  };
});
