const modelFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModel = () => {
    modal.classList.add("open");
  };

  const closeModel = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModel();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains(".cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModel();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Пицца",
      image: "image-6.jpg",
    },
  ];
  const loading = () => {
    container.innerHTML =
      '<p style = "width: 100%; text-align: center;">Загрузка</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/restorans/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">
                      ${card.title}
                    </h4>
                    <div class="products-card__description--badge">${card.time} мин</div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--raiting">
                        <img src="./images/icons/Star.svg" alt="Star" />
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} €
                      </div>
                      <div class="products-card__description-info--groap">
                      ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

modelFunc();
restsFunc();

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  const goodsArray = [
    {
      id: 0,
      image: "image_1.jpg",
      name: "Ролл угорь стандарт",
      text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 25,
    },
    {
      id: 1,
      image: "image_2.jpg",
      name: "Калифорния лосось стандарт",
      text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 29,
    },
    {
      id: 2,
      image: "image_3.jpg",
      name: "Окинава стандарт",
      text: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 22,
    },
    {
      id: 3,
      image: "image_4.jpg",
      name: "Цезарь маки хl",
      text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 27,
    },
    {
      id: 4,
      image: "image_5.jpg",
      name: "Ясай маки стандарт 185 г",
      text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 26,
    },
    {
      id: 5,
      image: "image_6.jpg",
      name: "Ролл с креветкой стандарт",
      text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 25,
    },
  ];
  const loading = () => {
    container.innerHTML =
      '<p style = "width: 100%; text-align: center;">Загрузка</p>';
  };
  const randerGoods = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-card">
                <div class="products-card__image">
                  <img src="./images/goods/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h5 class="products-card__description--name">
                    ${card.name}
                    </h5>
                  </div>
                  <div class="products-card__description-row">
                    <p class="products-card__description--text">
                    ${card.text}
                    </p>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-controls">
                      <button class="btn btn-primary">
                        В корзину
                        <img src="./images/icons/shopping-cart.svg" alt="shopping_cart" />
                      </button>
                      <span class="products-card__description-controls--price">
                      ${card.price} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
        `
      );
    });
  };
  if (container) {
    loading();
    setTimeout(() => {
      randerGoods(goodsArray);
    }, 1000);
  }
};
goodsFunc();