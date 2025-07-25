// Refactored cal.js for CVR site calculator modal integration

document.getElementById('calculatorForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const operation = document.getElementById('calcOperation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        showCalcResult('Please enter valid numbers.', true);
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                showCalcResult('Cannot divide by zero.', true);
                return;
            }
            result = num1 / num2;
            break;
        default:
            showCalcResult('Invalid operation selected.', true);
            return;
    }
    showCalcResult(`Result: ${result}`);
});

function showCalcResult(message, isError = false) {
    const resultDiv = document.getElementById('calcResult');
    resultDiv.textContent = message;
    resultDiv.classList.toggle('alert-danger', isError);
    resultDiv.classList.toggle('alert-info', !isError);
    resultDiv.classList.remove('d-none');
}
