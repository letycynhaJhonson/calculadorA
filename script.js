function converter() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        alert('Por favor, insira um valor para a temperatura em Celsius.');
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado').innerText = `Resultado: ${fahrenheit.toFixed(2)}°F`;
}
