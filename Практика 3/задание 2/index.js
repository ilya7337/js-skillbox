
let carPower = prompt("Введите кол-во лошадиных сил")
let tax;
if (carPower < 100) {
    tax = 12;
}
else if (100 <= carPower && carPower < 125){
    tax = 25;
}
else if (125 <= carPower && carPower < 150){
    tax = 35;
}
else if (150 <= carPower && carPower < 175){
    tax = 45;
}
else if (175 <= carPower && carPower < 200){
    tax = 50;
}
else if (200 <= carPower && carPower < 225){
    tax = 65;
}
else if (225 <= carPower && carPower < 250){
    tax = 75;
}
else{
    tax = 150;
}

console.log(`Сумма налога ${carPower * tax}`)