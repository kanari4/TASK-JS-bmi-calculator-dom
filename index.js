function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻


alert(":")
//challenge 1
let heightMeters = height / 100 ;
let BMI = weight / ( heightMeters * heightMeters) ;


 // challenge 2 


if ( BMI < 18.5) { window.alert("Underweight")};
if (18.5 < BMI < 24.9) {window.alert("Healthy Weight")};
if ( 25 < BMI < 29.9) {window.alert("Overweight")};
if ( BMI > 30 ) {window.alert("Obesity")};

// challenge 3 

if ( (19 < age < 24) && ( 19 < BMI 24 ) ) { window.alert("Healthy")}
else window.alert ("Not Healthy");

if ( (25 < age < 34) && ( 20 < BMI 25 ) ) { window.alert("Healthy")};
else window.alert ("Not Healthy");

if ( (35 < age < 44) && ( 21 < BMI 26 ) ) { window.alert("Healthy")};
else window.alert ("Not Healthy");

if ( (45 < age < 54) && ( 22 < BMI 27 ) ) { window.alert("Healthy")};
else window.alert ("Not Healthy");

if ( (55 < age < 64) && ( 23 < BMI 28 ) ) { window.alert("Healthy")};
else window.alert ("Not Healthy");

if ( (age > 65) && ( 24 < BMI 29 ) ) { window.alert("Healthy")};
else window.alert ("Not Healthy");

}

