export class Product {
    constructor(name, unit, quantity, price, url) {
        this.id = `${new Date().getTime()}`;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.price = price;
        this.url = url;
    }
}
