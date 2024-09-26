
function celsiusToFahrenheit(celsius=0) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit=0) {
    return (fahrenheit - 32) / 1.8;
}

console.log(celsiusToFahrenheit(25))
console.log(fahrenheitToCelsius(77))
