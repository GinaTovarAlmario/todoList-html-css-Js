// test connection file
console.log('Js ok!');

// create variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Adds a new task to the list.
 * - If the input box is empty, it shows an alert.
 * - Otherwise, it creates a new list item with the task description.
 * It also appends a delete cross icon and saves the data.
 */
function addTask() {

    // If the input box is empty, display an alert to the user
    if (inputBox.value === '') {
        alert('Please write something in your List!');
    } else {
        // If the input box is not empty, create a new list item (li)
        let newTask = document.createElement("li");

        // Set the content of the new list item to the value of the input box
        newTask.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(newTask);

        let span = document.createElement("span");

        // cross icon
        span.innerHTML = "\u00d7"
        newTask.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = '';

    // save Data
    saveData();
}

/**
 * Event listener callback for interacting with tasks.
 * - If a list item (LI) is clicked, it toggles the "checked" class to mark it as completed or uncompleted.
 * - If the cross icon (SPAN) is clicked, it removes the task.
 * It also saves the updated data after every change.
 * 
 * @param {Event} event - The click event triggered by the user.
 */

listContainer.addEventListener("click", function (event) {
    // Check if the clicked element is a <li>
    if (event.target.tagName === "LI") {

        // Check if the element already has the "checked" class
        if (event.target.classList.contains("checked")) {

            // If yes, remove the "checked" class
            event.target.classList.remove("checked");
        } else {

            // Otherwise, add the "checked" class
            event.target.classList.add("checked");
        }
        saveData();
        // Check if the clicked element is a <span>
    } else if (event.target.tagName === "SPAN") {

        // Remove the parent element of the <span>
        event.target.parentElement.remove();
        saveData();
    }
}, false);

/**
 * Saves the current list of tasks to local storage.
 * It stores the HTML content of the list container as the "data" key.
 */
function saveData(){

    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Loads and displays tasks from local storage.
 * It retrieves the HTML content stored under the "data" key in local storage
 * and sets it as the innerHTML of the list container.
 */
function showTask(){
    
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks saved in local storage
// This ensures that the tasks persist and are displayed when the page is reloaded
showTask();