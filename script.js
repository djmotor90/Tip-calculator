const billElement = document.getElementById('bill');
const tipPercentageElement = document.getElementById('tipPercentage');
const resultsElement = document.querySelector('.results');

billElement.addEventListener('input', calculateTip);
tipPercentageElement.addEventListener('change', calculateTip);

function calculateTip() {
    let bill = parseFloat(billElement.value);
    let tipPercentage = parseFloat(tipPercentageElement.value);

    if (isNaN(bill) || bill <= 0) {  // Ensure bill is a positive number
        resultsElement.innerHTML = '';
        return;
    }

    let tipAmount = bill * tipPercentage;
    let totalAmount = bill + tipAmount;

    resultsElement.innerHTML = `
        <p>Tip Amount: $<span>${tipAmount.toFixed(2)}</span></p>
        <p>Total Amount: $<span>${totalAmount.toFixed(2)}</span></p>
    `;
}
