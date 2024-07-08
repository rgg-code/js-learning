// it executes specified string as javascript code

// let x = `10+20`;

// let result = eval(input);
// console.log(result)


// example
document.addEventListener("DOMContentLoaded", function(){

    let input = document.querySelector("#input");
    let button = document.querySelector("#button");
    let h2 = document.querySelector("#h2");
    
    button.addEventListener("click", function() {
    // Get the value from the input element
    let inputValue = eval(input.value.trim());  // Trim any leading/trailing whitespace
console.log(inputValue);
    // Check if the input value is not empty
    if (inputValue) {
        // Update the content of the h2 element with the input value
        h2.innerHTML = inputValue;  // Use textContent for setting text to avoid XSS issues
    } else {
        // Handle case where input is empty
        h2.innerHTML = "Please enter something";  // Provide feedback to the user
    }
});
});

