import Delivery from "./Delivery.js";
import EditDelivery from "./EditDelivery.js";


const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, 'delivered'),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, 'canceled')
];

const containerEl = document.querySelector('.container');
const totalDistCont = document.querySelector('.totalDist');
const countTotalDistBtn = document.createElement('button')
countTotalDistBtn.textContent = 'Общее расстояние';
countTotalDistBtn.classList.add('total-dist-btn')
countTotalDistBtn.classList.add('count-total-dist');
deliveryArr.forEach(delivery => {
    const cardEl = delivery.getCard();
    containerEl.appendChild(cardEl);
});

totalDistCont.appendChild(countTotalDistBtn);

countTotalDistBtn.addEventListener('click', () => {
  const existingTotalDistEl = totalDistCont.querySelector('.total-dist-text');
  if (existingTotalDistEl) {
    totalDistCont.removeChild(existingTotalDistEl);
  }
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
  const totalDistEl = document.createElement('div')
  totalDistEl.textContent = `Общее расстояние: ${totalDistance} км`
  totalDistEl.classList.add('total-dist-text')
  totalDistCont.appendChild(totalDistEl);
})

