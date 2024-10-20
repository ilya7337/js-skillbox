
const cars = {
    BMW: {
        name: 'M5',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 550
      },
    Audi: {
        name: 'Q7',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 300 },
    Volvo: {
        name: 'XC 60',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 200
     }
}

const getCars = (obj) => {
    Object.keys(obj).forEach(element => {
        console.log(element);
    }); 
}

getCars(cars)

