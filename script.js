// test connection file
console.log('Js ok!');

// create variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// define function 

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

}
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

        // Check if the clicked element is a <span>
    } else if (event.target.tagName === "SPAN") {

        // Remove the parent element of the <span>
        event.target.parentElement.remove();
    }
}, false);