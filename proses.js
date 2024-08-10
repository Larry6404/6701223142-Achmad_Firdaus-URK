document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai dari form input
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);

    let result;

    // Lakukan operasi aritmatika menggunakan switch case
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            result = 'Operator tidak dikenali';
            break;
    }

    // Tampilkan hasil
    document.getElementById('result').textContent = `Hasil: ${result}`;
});
