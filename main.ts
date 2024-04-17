import inquirer from "inquirer";
// Assigning values to variables
let myBalance = 10000; // Dollar
let myPin = 1234;
console.log("Welcome to my project : Atm Machine");


let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) { console.log(" Pin is Correct , Login successfully!");
console.log(`Current Account Balance is ${myBalance} `)


let operationAns = await inquirer.prompt([
        {
    name: "operation",
    message:"Please select an operation",
    type: "list",
    choices : ["withdraw amount", "check balance"]
}
])

if (operationAns.operation === "withdraw amount") {
    let amountAns = await inquirer.prompt([
        {
            name : "amount",
            message: "Enter the amount to withdraw",
            type: "number"
        }]
)

if (amountAns.amount > myBalance) {
    console.log("Insufficient Balance");
}
     else{ 
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw successfully`);
        console.log(`Your remaing balance is: ${myBalance}`);

    
    }
}

else if(operationAns.operation ==="check balance"){
    console.log(`Your Account Balance is:${myBalance}`);
    
}
}
else{
    console.log("Pin is incorrect, Try again!");
    
}

