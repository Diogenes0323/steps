// script.js

document.getElementById("convertButton").addEventListener("click", function () {
    const stepsInput = document.getElementById("stepsInput").value;
    
    // Remove commas from the input
    const sanitizedInput = stepsInput.replace(/,/g, '');

    // Convert to an integer
    const steps = parseInt(sanitizedInput);

    if (isNaN(steps) || steps < 0) {
        alert("Please enter a valid number of steps.");
        return;
    }

    // Convert steps to miles and round to 2 decimal places
    const miles = (steps * 0.0004734848).toFixed(2);
    document.getElementById("result").innerText = `Miles: ${miles}`;
});
