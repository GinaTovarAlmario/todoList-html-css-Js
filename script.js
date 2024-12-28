// test connection file
console.log('Js ok!');

// create variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// define function 

function addTask() {

    // If the input box is empty, display an alert to the user
    if (inputBox === '') {
        alert('Please write something in your List!');
    } else {
        // If the input box is not empty, create a new list item (li)
        let newTask = document.createElement("li");

        // Set the content of the new list item to the value of the input box
        newTask.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(newTask);

        // Clear the input box after adding the task
        inputBox.value = '';
    }
}