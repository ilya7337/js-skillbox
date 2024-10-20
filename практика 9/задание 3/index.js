
const createCar = (addInf) => {
    const someInf = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    }
    return {...someInf, ...addInf};
}

console.log(createCar({ name: 'Haval', hp: 198}))
