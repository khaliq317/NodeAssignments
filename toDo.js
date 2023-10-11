import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Please add your task?"
        }, {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: false
        }
    ]);
    let { todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Please enter valid input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list:");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("No task found");
}
console.log(todos);
