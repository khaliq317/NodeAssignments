import inquirer from "inquirer";

let compGeneratedNum = Math.floor(Math.random()*10);
let {Guess} = await inquirer.prompt([
    {
        name:"Guess",
        type:"number",
        message:"Please Guess the number between 1 to 10:"
    }
]);

if(Guess===compGeneratedNum){
    console.log("Congratulations! You won the Game");
    console.log(`secret Number: ${compGeneratedNum}  Your Guess: ${Guess}`);

} else{
    console.log("Oops! Try again");
};