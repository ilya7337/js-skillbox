

function totalSum(priceItem=0, amountItem=0, discountItem=0) {
    return priceItem * amountItem * (1 - discountItem/100)
}

console.log(totalSum(25000, 3, 20))