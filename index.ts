#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Welcome Message
console.log("/n/tWellcome To /'Atif Ullah Khan/' -CLI Classic-Simple Calculator/n");

const answer = await inquirer.prompt([
  { message: "Enter  First Number", type: "number", name: "firstNumber" },
  { message: "Enter  Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the Oprator toperform ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  }
     
]);
// condition statements 
if(answer.operator === "Addition"){
   console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);}
    else if(answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber);
    }else if(answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }else{console.log("Enter a valid Number");}
    console.log("The end");