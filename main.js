// Basic Global variables for the page.
let taxRate;
let totalTax;

// let budget = document.getElementById('budget').value;


// This is the function that takes the option from the dropdown from the user and it would pick a number for it. Followed by the calculation for the actual tax. 
function calculate() {
  let taxPercentage = document.getElementById('province').value;
  console.log(taxPercentage);
  if (taxPercentage == "AB" || taxPercentage == "BC" || taxPercentage == "MB" || taxPercentage == "NT" || taxPercentage == "NU" || taxPercentage == "QC" || taxPercentage == "SK" || taxPercentage == "YT") {
    taxRate = 0.05;
  } else if (taxPercentage == "NB" || taxPercentage == "NL" || taxPercentage == "NS" || taxPercentage == "PE") {
    taxRate = 0.15;
  } else if (taxPercentage == "ON") {
    console.log("on")
    taxRate = 0.13;
    // this is the code for Ontario
  }
  let amount = parseFloat(document.getElementById('income').value);
  let final = document.getElementById('result').value;

  // This following is the actual logic behind the functionality of the page.
  let taxAmount = amount * taxRate;
  totalTax = amount + taxAmount;
  let text = "Your final price is " + "CA$" + " " + totalTax;
  result.innerHTML = text;
}