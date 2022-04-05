const verificaCampo = (campo1, campo2) => {
    if (campo1 === "" || campo2 === "") {
        throw new Error('Por favor, preencha os dois campos!')
    } else if (isNaN(campo1) || isNaN(campo2)) {
        throw new Error('Por favor, digite apenas números!')
    }
}

const sum = () => {
    try {
        const valor1 = document.querySelector('#value1').value
        const valor2 = document.querySelector('#value2').value
        const result = parseInt(valor1) + parseInt(valor2)
        verificaCampo(valor1, valor2)
        document.querySelector('#result').innerText = `Resultado: ${result}`
    } catch (error) {
        document.querySelector('#result').innerText = error.message;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }

}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}