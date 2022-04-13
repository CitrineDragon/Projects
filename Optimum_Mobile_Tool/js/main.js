// Current Bill
document.querySelector('.paidOffOne').addEventListener('click', paidOne);
document.querySelector('.addLineOne').addEventListener('click', addOne);
document.querySelector('.paidOffTwo').addEventListener('click', paidTwo);
document.querySelector('.addLineTwo').addEventListener('click', addTwo);
document.querySelector('.paidOffThree').addEventListener('click', paidThree);
document.querySelector('.addLineThree').addEventListener('click', addThree);
document.querySelector('.paidOffFour').addEventListener('click', paidFour);
document.querySelector('.addLineFour').addEventListener('click', addFour);
document.querySelector('.paidOffFive').addEventListener('click', paidFive);

// New Bill
document.querySelector('.addNewLineOne').addEventListener('click', newOne);
document.querySelector('.addNewLineTwo').addEventListener('click', newTwo);
document.querySelector('.addNewLineThree').addEventListener('click', newThree);
document.querySelector('.addNewLineFour').addEventListener('click', newFour);

// Calculate
document.querySelector('.currentCalc').addEventListener('click', calc);

// Reset
document.querySelector('.reset').addEventListener('click', reset);

// Current Bill
function paidOne() {
  document.querySelector('.oneLeasing').classList.toggle('hidden');
}
function addOne() {
  document.querySelector('.twoCurrent').classList.toggle('hidden');
}
function paidTwo() {
  document.querySelector('.twoLeasing').classList.toggle('hidden');
}
function addTwo() {
  document.querySelector('.threeCurrent').classList.toggle('hidden');
}
function paidThree() {
  document.querySelector('.threeLeasing').classList.toggle('hidden');
}
function addThree() {
  document.querySelector('.fourCurrent').classList.toggle('hidden');
}
function paidFour() {
  document.querySelector('.fourLeasing').classList.toggle('hidden');
}
function addFour() {
  document.querySelector('.fiveCurrent').classList.toggle('hidden');
}
function paidFive() {
  document.querySelector('.fiveLeasing').classList.toggle('hidden');
}

// New Bill
function newOne() {
  document.querySelector('.newLineTwo').classList.toggle('hidden');
}
function newTwo() {
  document.querySelector('.newLineThree').classList.toggle('hidden');
}
function newThree() {
  document.querySelector('.newLineFour').classList.toggle('hidden');
}
function newFour() {
  document.querySelector('.newLineFive').classList.toggle('hidden');
}

// Calculate
function calc() {
  let activation = 0;

  // Current One
  let cmcOne = Number(document.querySelector('.monthlyCostOne').value);
  console.log(cmcOne);
  let lcOne = Number(document.querySelector('.monthlyLeaseOne').value);
  console.log(lcOne);
  let lmOne = Number(document.querySelector('.leaseMonthsOne').value);
  console.log(lmOne);
  // Current Two
  let cmcTwo = Number(document.querySelector('.monthlyCostTwo').value);
  let lcTwo = Number(document.querySelector('.monthlyLeaseTwo').value);
  let lmTwo = Number(document.querySelector('.leaseMonthsTwo').value);
  // Current Three
  let cmcThree = Number(document.querySelector('.monthlyCostThree').value);
  let lcThree = Number(document.querySelector('.monthlyLeaseThree').value);
  let lmThree = Number(document.querySelector('.leaseMonthsThree').value);
  // Current Four
  let cmcFour = Number(document.querySelector('.monthlyCostFour').value);
  let lcFour = Number(document.querySelector('.monthlyLeaseFour').value);
  let lmFour = Number(document.querySelector('.leaseMonthsFour').value);
  // Current Five
  let cmcFive = Number(document.querySelector('.monthlyCostFive').value);
  let lcFive = Number(document.querySelector('.monthlyLeaseFive').value);
  let lmFive = Number(document.querySelector('.leaseMonthsFive').value);

  // New One
  let nmcOne = Number(document.querySelector('.newCostOne').value);
  console.log(nmcOne);
  // New Two
  let nmcTwo = Number(document.querySelector('.newCostTwo').value);
  // New Three
  let nmcThree = Number(document.querySelector('.newCostThree').value);
  // New Four
  let nmcFour = Number(document.querySelector('.newCostFour').value);
  // New Five
  let nmcFive = Number(document.querySelector('.newCostFive').value);

  // New One
  if (nmcOne > 0) {
    activation += 20;
  }
  // New Two
  if (nmcTwo > 0) {
    activation += 20;
  }
  // New Three
  if (nmcThree > 0) {
    activation += 20;
  }
  // New Four
  if (nmcFour > 0) {
    activation += 20;
  }
  // New Five
  if (nmcFive > 0) {
    activation += 20;
  }

  let totalMonthlyCost = cmcOne + cmcTwo + cmcThree + cmcFour + cmcFive;
  console.log(`total monthly cost is ${totalMonthlyCost}`);

  let totalPayOffAmount =
    lcOne * lmOne +
    lcTwo * lmTwo +
    lcThree * lmThree +
    lcFour * lmFour +
    lcFive * lmFive;
  console.log(`total payoff cost is ${totalPayOffAmount}`);

  let newTotalMonthlyCost = nmcOne + nmcTwo + nmcThree + nmcFour + nmcFive;
  console.log(`new monthly cost is ${newTotalMonthlyCost}`);

  console.log(`activation is ${activation}`);

  let newSavings = totalMonthlyCost - newTotalMonthlyCost;
  console.log(`new savings is ${newSavings}`);

  let payOffMonths = Math.ceil((totalPayOffAmount + activation) / newSavings);
  console.log(`pay off months is ${payOffMonths}`);

  let first12monthSavings = newSavings * 12 - (totalPayOffAmount + activation);
  let next12monthSavings = newSavings * 12;

  // Activation Costs
  // Total Monthly Savings
  document.querySelector('.totalMonthlySavings').innerText = `$${newSavings}`;
  // Pay Off Amount
  document.querySelector('.totalPayOff').innerText = `$${totalPayOffAmount}`;
  // Activation Cost
  document.querySelector('.activationCost').innerText = `$${activation}`;
  // Months To Start Saving Money
  document.querySelector(
    '.payOffMonths'
  ).innerText = `${payOffMonths} month(s)`;
  // Savings For Switching, First Twelve Months
  document.querySelector(
    '.totalYearlySavings'
  ).innerText = `$${first12monthSavings}`;
  // Savings For Switching, After Twelve Months
  document.querySelector(
    '.totalNextYearSavings'
  ).innerText = `$${next12monthSavings}`;
}

function reset() {
  location.reload(true);
}
