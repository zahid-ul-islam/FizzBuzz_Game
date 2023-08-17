let results=[]
function fizzBuzz() {
    let arr = []
  let inputNumber = document.getElementById("inputNumber");
  let output = document.getElementById("output");
  let inputVal= parseInt(inputNumber.value)

  let result = "";
  if(inputVal%3===0 && inputVal!==0){
    result+="Fizz"
  }
   if(inputVal%5===0 && inputVal!==0){
    result+="Buzz"
  }
  if (result==="" || inputVal===0) {
    result+="Not Fizz or Buzz or FizzBuzz"
  }
  
  var outputLine = document.createElement("p");
    outputLine.innerHTML = "Number: " + inputVal + " => Result: " + result;
    output.insertBefore(outputLine, output.firstChild);
    results.unshift({ inputVal: inputVal, result: result });
  
}
