import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
	new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
	new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);

let a = collection.retAll();

console.log("\nID                | Task						| Complete")
a.forEach(item => console.log(item.id + " ---- " + item.task + " ----" +  ((item.complete)?"completo":"incompleto")))

console.log("\n------------------------------------\n")

let col = collection.getTodoItems(true);
console.log("Complete")
col.forEach(task => console.log(task.printDetails()))

