  const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "img/discount.png"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "img/discount.png"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "img/gift_icon.png"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "img/gift_icon.png"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "img/gift_icon.png"
    }
  ]



const giftWindowEl = document.querySelector('.gift-window');
const getGiftEl = document.querySelector('.get-gift');
const closeGiftEl = document.querySelector('.close-gift');
const textGiftEl = document.querySelector('.text-gift');
const imgGiftEl = document.querySelector('.gift-img');

getGiftEl.onclick = function () {
  giftWindowEl.style.display = "block";
  const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];
  textGiftEl.textContent = randomGift.title;
  imgGiftEl.src = randomGift.icon;
  
}


closeGiftEl.onclick = function () {
  giftWindowEl.style.display = "none";
}



