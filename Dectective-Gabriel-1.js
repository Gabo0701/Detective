// Function that simulates a mysterious operation
function performOperation() {
    const chance = Math.random(); // Generates a random number between 0 and 1

    if (chance < 0.5) {
        console.log("Mission accomplished!");
    } else {
        throw new Error("Mission failed!");
    }
}

// Initial setup
const totalMissions = 20;
const successBonus = 12;
const failureBonus = 2;
const attendanceBonus = 3;

let totalVacationDays = 0;

// Perform the missions
for (let mission = 1; mission <= totalMissions; mission++) {
    try {
        performOperation(); // Attempt to perform the operation
        totalVacationDays += successBonus; // Success: add vacation days for success
    } catch (error) {
        console.log(`Mission ${mission}: ${error.message}`); // Handle the error
        totalVacationDays += failureBonus; // Failure: add motivation days
    } finally {
        totalVacationDays += attendanceBonus; // Always add attendance days
    }
}

// Display the total vacation days
console.log("Total vacation days earned: " + totalVacationDays);