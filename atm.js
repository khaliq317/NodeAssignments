import inquirer from "inquirer";
;
const answers = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: "Please enter your Id!"
    },
    {
        name: "userPin",
        type: "number",
        message: "Please enter your Pin!"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Select your account type"
    },
    {
        name: "transactionType",
        type: "list",
        choices: ["fast cash", "withdrawl"],
        message: "Please select your tranaction",
        /*
        when(answers){
            return answers.accountType
        }
        */
    },
    {
        type: "list",
        name: "amount",
        choices: [5000, 10000, 15000, 20000],
        message: "Select your amount",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    // console.log(balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log(`Your remaining balance is ${remaining}`);
    }
    else {
        console.log("Insufficient balance");
    }
}
;
