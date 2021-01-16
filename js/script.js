const popupLinks = document.querySelector(".popup-link");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const productsWrapper = document.querySelector(".products__wrapper");


// JSON 
const getData = async function (url) {
  const response = await fetch(url);
  if(!response.ok){
      throw new Error(`Ошибка по адресу ${url}`)
  }
   return await response.json()
};


function createCards(chairs){
    const { name, price, img } = chairs;
    const card = `
        <div class="products__product">
            <div class="products__img">
                    <img src=${img} alt="">
            </div>
            <div class="products__description">
                    <span>${name}</span>
            </div>
            <div class="products__price">
                    <span>${price} ₽</span>
            </div>
            <button class="products__btn popup-link">Купить</button>
        </div>
    `;
    productsWrapper.insertAdjacentHTML(`beforeend`, card)

}


getData('./db/products.json').then(function(data){
    const value = data.product;
    value.forEach(createCards)
});


// POPUP

function toggleModal(){
    popup.classList.toggle("open")
}
$(document).on('click','.popup__close', function(){
    toggleModal();
  });
$(document).on('click','.popup-link', function(){
    toggleModal();
  });

  $('#overlay').click(function(e){
    if(e.target == this) $('a.popup__close').trigger('click');
    });

