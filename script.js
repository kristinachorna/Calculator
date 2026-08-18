    // Declare variables to store calculator values
      let firstNumber = "";
      let operator = "";
      let secondNumber = "";

      // Function to add numbers to the display
      function appendValue(value) {
         const display = document.getElementById("display");

         if (display.value === "0") {
            display.value = value;
         } else {
            display.value += value;
         }
      }

      // Function to store the operator and first number
      function setOperator(op) {
         const display = document.getElementById("display");

         firstNumber = display.value;
         operator = op;
         display.value = "";
      }

      // Function to perform the calculation
      function calculate() {
         const display = document.getElementById("display");
         secondNumber = display.value;

         let result = 0;

         if (operator === "+") {
            result = Number(firstNumber) + Number(secondNumber);
         } else if (operator === "-") {
            result = Number(firstNumber) - Number(secondNumber);
         } else if (operator === "*") {
            result = Number(firstNumber) * Number(secondNumber);
         } else if (operator === "/") {
            result = Number(firstNumber) / Number(secondNumber);
         }

         display.value = result;
      }

      // Function to clear the calculator display
      function clearDisplay() {
         document.getElementById("display").value = "0";
         firstNumber = "";
         operator = "";
         secondNumber = "";
      }