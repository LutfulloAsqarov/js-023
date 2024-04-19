import { CARS } from "./data.js";
import { BMW } from "./classes.js";
import { CARDATA } from "./const.js";

const cards = document.querySelector(".cars__cards");
const closeForm = document.querySelector(".close-form");
const cancelBtn = document.querySelector(".form__cancel");
const submitBtn = document.querySelector(".form__submit");
const addBtn = document.querySelector(".cars__add-car");
const model = document.querySelector(".model");
const form = document.querySelector(".form");
const carBrand = document.querySelector(".car-brand");
const carName = document.querySelector(".car-name");
const carMadeCountry = document.querySelector(".made-country");
const carCreateDate = document.querySelector(".create-date");
const carImg = document.querySelector(".car-img");
const carColor = document.querySelector(".car-color");
const carHp = document.querySelector(".car-hp");
const carMaxSpeed = document.querySelector(".car-max-speed");
const carPrice = document.querySelector(".car-price");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let car = new BMW(
        carBrand.value,
        carName.value,
        carMadeCountry.value,
        carCreateDate.value,
        carImg.value,
        carColor.value,
        carHp.value,
        carMaxSpeed.value,
        carPrice.value
    );

    CARS.push(car);
    localStorage.setItem(CARDATA, JSON.stringify(CARS));

    mapCars(CARS);

    carBrand.value = "";
    carName.value = "";
    carMadeCountry.value = "";
    carCreateDate.value = "";
    carImg.value = "";
    carColor.value = "";
    carHp.value = "";
    carMaxSpeed.value = "";
    carPrice.value = "";

    model.style.display = "none";
});

function mapCars(carData) {
    let carCards = "";
    carData.forEach((car) => {
        carCards += `
            <div class="cars__card">
                <div class="cars__card__img">
                    <img src="${car.img}" alt="${car.firsName}" />
                </div>
                <div class="cars__card__info">
                    <h3 class="cars__card__title">
                        Brand: ${car.brand}
                    </h3>
                    <p class="cars__card__desc">
                        Name: ${car.name}
                    </p>
                    <p class="cars__card__desc">
                        Made country: ${car.madeCountry}
                    </p>
                    <p class="cars__card__desc">Create data: ${car.createDate}</p>
                    <p class="cars__card__desc">Color: ${car.color}</p>
                    <p class="cars__card__desc">Horsepower: ${car.hp} hp</p>
                    <p class="cars__card__desc">Max speed: ${car.maxSpeed} km/h</p>
                    <p class="cars__card__desc">Price: ${car.cost}$</p>
                    <div class="cars__card__btns">
                        <button class="delate" name="delate" data-id="${car.id}">Delate</button>
                        <button class="edit" name="edit">Edit</button>
                    </div>
                </div>
            </div>
        `;
        cards.innerHTML = carCards;
    });
}

mapCars(CARS);

addBtn.addEventListener("click", () => {
    model.style.display = "block";
    closeForm.style.display = "block";
});
cancelBtn.addEventListener("click", () => {
    model.style.display = "none";
});
closeForm.addEventListener("click", () => {
    model.style.display = "none";
    closeForm.style.display = "none";
});

const deleteCar = (id) => {
    if (confirm("Are you sure")) {
        let index = CARS.findIndex((u) => u.id === id);
        CARS.splice(index, 1);
        mapCars(CARS);
        localStorage.setItem(CARDATA, JSON.stringify(CARS));
    }
};

cards.addEventListener("click", (e) => {
    if (e.target.name === "delate") {
        deleteCar(e.target.dataset.id);
    }
});
