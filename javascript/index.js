//there are two ways: you can call 

//the function directly on the button when clicked
function talker() {
  document.querySelector("#heading").innerHTML = "The MERN Stack Rocks";
  document.querySelector("#heading").style.color = "red";
}

//counter classwork

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#btn-heading").addEventListener("click", talker)
})

//you can add an eventListener to the ID or Class of a button or element using querySelector
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
  
  document.querySelector(".counter-id").style.color !== "blue"
    ? (document.querySelector(".counter-id").style.color = "blue")
    : document.querySelector(".counter-id").style.color = "red";
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

//event listner on forms

//get the input element
const itemInput = document.querySelector("#item-input");

//submit form function
function submitHandler(e) {
  e.preventDefault(); //prevent the document from reloading after submit

  //get the value of the input element
  const theValue = itemInput.value;
  console.log(theValue);
  console.log(itemInput);

  if (theValue.trim() !== "") {
    document.querySelector("#msgbox").innerHTML = theValue;
  } else {
    alert("Please add a message");
  }
}

//add an event listner to the whole DOM
document.addEventListener("DOMContentLoaded", function () {
  
  //get the form element and attach event listner
   document.querySelector("#theForm").addEventListener("submit", submitHandler);

});

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

//Number Object
let num2 = "2.3456272"

//converting a number string to a number data type
let num3 = Number(num2)

//Rounding a number to a specific decimal point
let deciNum = num3.toFixed(3)

//converting a number data type to a string
let num4 = num3.toString()

console.log(num4, deciNum);