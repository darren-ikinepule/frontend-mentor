document.querySelector(".submit-btn").addEventListener("click", function () {
    // Get input values
    const day = parseFloat(document.getElementById("day").value);
    const month = parseFloat(document.getElementById("month").value);
    const year = parseFloat(document.getElementById("Year").value);
    const today = new Date();
    const currentYear = today.getFullYear();

    // Error elements
    const dayError = document.getElementById("day-error");
    const monthError = document.getElementById("month-error");
    const yearError = document.getElementById("year-error");

    // Label elements
    const dayLabel = document.querySelector("label[for='day']");
    const monthLabel = document.querySelector("label[for='month']");
    const yearLabel = document.querySelector("label[for='Year']");

    // Reset previous error messages and label colors
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";

    dayLabel.style.color = "";
    monthLabel.style.color = "";
    yearLabel.style.color = "";

    let hasError = false;

    // Validate year range
    if (!year || year < 1900 || year > 2025) {
        yearError.textContent = "Year must be between 1900 and 2025.";
        yearLabel.style.color = "red"; // Turn label red on error
        hasError = true;
    }

    // Validate month range
    if (!month || month < 1 || month > 12) {
        monthError.textContent = "Month must be between 1 and 12.";
        monthLabel.style.color = "red"; // Turn label red on error
        hasError = true;
    }

    // Validate day range based on the selected month
    if (!day || day < 1 || day > 31) {
        dayError.textContent = "Day must be between 1 and 31.";
        dayLabel.style.color = "red"; // Turn label red on error
        hasError = true;
    } else {
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            dayError.textContent = `Invalid day for selected month. Max: ${daysInMonth}.`;
            dayLabel.style.color = "red"; // Turn label red on error
            hasError = true;
        }
    }

    // Stop calculation if there are errors
    if (hasError) return;

    // Convert user input to a birth date object
    const birthDate = new Date(year, month - 1, day);
    const todayDate = new Date();

    let ageYears = todayDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = todayDate.getMonth() - birthDate.getMonth();
    let ageDays = todayDate.getDate() - birthDate.getDate();

    // Adjust for negative months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Adjust for negative days
    if (ageDays < 0) {
        let lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }

    // Ensure positive ageMonths
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    // Display the correct result
    document.querySelector(".output-year").textContent = ageYears;
    document.querySelector(".output-month").textContent = ageMonths;
    document.querySelector(".output-day").textContent = ageDays;
});
