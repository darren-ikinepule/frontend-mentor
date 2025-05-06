<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        input {
            width: 60px;
            padding: 5px;
            margin: 5px;
            text-align: center;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
            background: black;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .result {
            font-size: 24px;
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <label>Day: <input type="number" id="day" min="1" max="31"></label>
        <label>Month: <input type="number" id="month" min="1" max="12"></label>
        <label>Year: <input type="number" id="year" min="1900" max="2025"></label>
        <br>
        <button onclick="calculateAge()">Calculate</button>
        <div class="result" id="result"></div>
    </div>

    <script>
        function calculateAge() {
            let day = document.getElementById("day").value;
            let month = document.getElementById("month").value;
            let year = document.getElementById("year").value;
            
            if (!day || !month || !year) {
                alert("Please enter a valid date");
                return;
            }
            
            let birthDate = new Date(year, month - 1, day);
            let today = new Date();
            let ageYears = today.getFullYear() - birthDate.getFullYear();
            let ageMonths = today.getMonth() - birthDate.getMonth();
            let ageDays = today.getDate() - birthDate.getDate();
            
            if (ageDays < 0) {
                ageMonths--;
                ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }
            
            document.getElementById("result").innerHTML = `<span style="color: purple">${ageYears}</span> years <br>
            <span style="color: purple">${ageMonths}</span> months <br>
            <span style="color: purple">${ageDays}</span> days`;
        }
    </script>
</body>
</html>
