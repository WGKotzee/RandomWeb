function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultElement = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultElement.textContent = "Please enter valid height and weight.";
      return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    var category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    resultElement.textContent = `Your BMI is ${bmi}. You are ${category}.`;
  }

  document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-mobile-links').classList.toggle('active');
  });
  