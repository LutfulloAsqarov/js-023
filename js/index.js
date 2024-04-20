import { PRODUCTS } from "./data.js";
import { Product } from "./classes.js";
import { PRODUCT } from "./const.js";

const cards = document.querySelector(".products__cards");
const closeForm = document.querySelector(".close-form");
const cancelBtn = document.querySelector(".form__cancel");
const submitBtn = document.querySelector(".form__submit");
const addBtn = document.querySelector(".products__add-product");
const model = document.querySelector(".model");
const form = document.querySelector(".form");
const name = document.querySelector(".product__name");
const quantity = document.querySelector(".product__quantity");
const unit = document.querySelector("#product__unit");
const price = document.querySelector(".product__price");
const url = document.querySelector(".product__img");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let product = new Product(
        name.value,
        quantity.value,
        unit.value,
        price.value,
        url.value
    );

    PRODUCTS.push(product);
    localStorage.setItem(PRODUCT, JSON.stringify(PRODUCTS));

    mapProducts(PRODUCTS);

    name.value = "";
    quantity.value = "";
    unit.value = "";
    price.value = "";
    url.value = "";

    model.style.display = "none";
});

function mapProducts(productData) {
    let productCards = "";
    productData.forEach((product) => {
        productCards += `
            <div class="products__card">
                <div class="products__card__img">
                    <img src="${product.url}" alt="${product.name}" />
                </div>
                <div class="products__card__info">
                    <h3 class="products__card__title">
                        Name: ${product.name}
                    </h3>
                    <p class="products__card__desc">
                        Quantity: ${product.quantity}
                    </p>
                    <p class="products__card__desc">Unit: ${product.unit}</p>
                    <p class="products__card__desc">Price: ${product.price}</p>
                    <div class="products__card__btns">
                        <button class="delate" name="delate" data-id="${product.id}">Delate</button>
                        <button class="edit" name="edit">Edit</button>
                    </div>
                </div>
            </div>
        `;
        cards.innerHTML = productCards;
    });
}

mapProducts(PRODUCTS);

addBtn.addEventListener("click", () => {
    model.style.display = "block";
    closeForm.style.display = "block";
});
cancelBtn.addEventListener("click", () => {
    model.style.display = "none";
    closeForm.style.display = "none";
});
closeForm.addEventListener("click", () => {
    model.style.display = "none";
    closeForm.style.display = "none";
});
submitBtn.addEventListener("click", () => {
    model.style.display = "none";
    closeForm.style.display = "none";
});

const deleteProduct = (id) => {
    if (confirm("Are you sure")) {
        let index = PRODUCTS.findIndex((u) => u.id === id);
        PRODUCTS.splice(index, 1);
        mapProducts(PRODUCTS);
        localStorage.setItem(PRODUCT, JSON.stringify(PRODUCTS));
    }
};

cards.addEventListener("click", (e) => {
    if (e.target.name === "delate") {
        deleteProduct(e.target.dataset.id);
    }
});
