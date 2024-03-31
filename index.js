import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 9999;
console.log("Welcome To My Atm Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!, Login Successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    if (operationAns.operation === "checkbalance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                message: "select a withdrawal method",
                type: "list",
                choices: ["enteramount", "fastcash"],
            }
        ]);
        if (withdrawAns.withdraw === "fastcash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "kindly select a fast cash option",
                    type: "list",
                    choices: [1000, 2000, 3000, 4000, 10000],
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw Successfully`);
                console.log("Your remaining balance is: " + myBalance);
            }
        }
        else if (withdrawAns.withdraw === "enteramount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw Successfully`);
                console.log("Your remaining balance is: " + myBalance);
            }
        }
    }
}
else {
    console.log("Pin is incorrect, Try again");
}
