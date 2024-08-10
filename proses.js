document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai dari form input
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);

    let result;

    // Lakukan operasi aritmatika berdasarkan pilihan operator
    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        result = number1 - number2;
    } else if (operator === '*') {
        result = number1 * number2;
    } else {
        result = 'Operator tidak dikenali';
    }

    // Tampilkan hasil
    document.getElementById('result').textContent = `Hasil: ${result}`;
});
