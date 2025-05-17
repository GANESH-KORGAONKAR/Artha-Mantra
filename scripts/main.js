// EMI Calculator
function calculateEMI() {
  let P = parseFloat(document.getElementById("loan").value);
  let R = parseFloat(document.getElementById("rate").value) / 100 / 12;
  let N = parseFloat(document.getElementById("years").value) * 12;

  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById("emiResult").textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
}

// Investment Return Calculator
function calculateInvestment() {
  let principal = parseFloat(document.getElementById("initialInvestment").value);
  let rate = parseFloat(document.getElementById("investmentRate").value) / 100;
  let time = parseFloat(document.getElementById("investmentYears").value);

  let finalAmount = principal * Math.pow(1 + rate, time);
  document.getElementById("investmentResult").textContent = `Estimated Return: ₹${finalAmount.toFixed(2)}`;
}

// Retirement Calculator
function calculateRetirement() {
  let age = parseInt(document.getElementById("currentAge").value);
  let retireAge = parseInt(document.getElementById("retireAge").value);
  let saving = parseFloat(document.getElementById("monthlySaving").value);
  let rate = parseFloat(document.getElementById("retirementRate").value) / 100 / 12;
  let months = (retireAge - age) * 12;

  let corpus = saving * ((Math.pow(1 + rate, months) - 1) / rate);
  document.getElementById("retirementResult").textContent = `Estimated Retirement Corpus: ₹${corpus.toFixed(2)}`;
}