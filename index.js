function calculateBMI() {
    let height =parseInt(prompt("Enter your Height"));
    let weight =parseInt(prompt("Enter your Weight"));
    let BMI = weight / ((height * height) / 10000).toFixed(2);
  
    if (height=== ""|| isNaN(height)){
        return "Put a valid height"
    }
    else if (weight=== ""|| isNaN(weight)){
        return "Put in valid weight"
    }
    else{
    if (BMI < 18.5) {
      return "underweight";
    } else if (BMI >= 18.5 && BMI <= 25) {
      return "Normal";
    } else if (BMI >= 25 && BMI <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  }
  //console.log(calculateBMI())
  alert(calculateBMI());