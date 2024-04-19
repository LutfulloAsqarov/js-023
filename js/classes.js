class Cars {
    constructor(createDate, color, img, hp, maxSpeed, cost) {
        this.createDate = createDate;
        this.color = color;
        this.img = img;
        this.hp = hp;
        this.maxSpeed = maxSpeed;
        this.cost = cost;
    }
}

export class BMW extends Cars {
    constructor(
        brand,
        name,
        madeCountry,
        createDate,
        img,
        color,
        hp,
        maxSpeed,
        cost
    ) {
        super(createDate, color, img, hp, maxSpeed, cost);
        this.id = `${new Date().getTime()}`;
        this.name = name;
        this.brand = brand;
        this.madeCountry = madeCountry;
    }
}
