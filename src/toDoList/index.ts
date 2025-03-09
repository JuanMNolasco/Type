import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Usuario", todos);

function renderTareas(): void {

    const list = document.getElementById("listaT") as HTMLUListElement;
    list.innerHTML = "";

    collection.getTodoItems(true).forEach(item => {

        const li = document.createElement("li");

        li.textContent = `${item.task} ${item.complete ? "(completado)" : ""}`;
        
        const btnCompletar = document.createElement("button");
        btnCompletar.classList.add("completar");
        btnCompletar.textContent = "Completar";
        btnCompletar.onclick = () => {

            collection.markComplete(item.id, !item.complete);
            renderTareas();

        };

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("eliminar");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => {

            collection.removeComplete();
            renderTareas();

        };

        li.appendChild(btnCompletar);
        li.appendChild(btnEliminar);
        list.appendChild(li);

    });
}

function addTarea(): void {

    const input = document.getElementById("tarea") as HTMLInputElement;
    
    if (input.value.trim() !== "") {

        collection.addTodo(input.value);
        input.value = ""; 
        renderTareas();

    }

}

document.addEventListener("DOMContentLoaded", () => {

    renderTareas();
    
    const addBtn = document.getElementById("addTarea") as HTMLButtonElement;
    addBtn.addEventListener("click", addTarea);

});
