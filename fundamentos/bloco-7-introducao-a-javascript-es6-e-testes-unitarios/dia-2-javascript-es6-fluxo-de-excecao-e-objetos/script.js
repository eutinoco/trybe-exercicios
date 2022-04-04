const sum = () => {
    const valor1 = parseInt(document.querySelector('#value1').value)
    const valor2 = parseInt(document.querySelector('#value2').value)
    const result = valor1 + valor2
    document.querySelector('#result').innerText = `Resultado: ${result}`
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}