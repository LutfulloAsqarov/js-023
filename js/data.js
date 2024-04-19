import { CARDATA } from "./const.js";

export const CARS = JSON.parse(localStorage.getItem(CARDATA)) || [
    {
        id: "1",
        name: "THE X1",
        brand: "BMW",
        madeCountry: "Germany",
        createDate: "2019-04-20",
        color: "blue",
        img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg",
        hp: 231,
        maxSpeed: 219,
        cost: 38_600,
    },
    {
        id: "2",
        name: "M5",
        brand: "BMW",
        madeCountry: "Germany",
        createDate: "2019-04-20",
        color: "white",
        img: "https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=",
        hp: 231,
        maxSpeed: 219,
        cost: 38_600,
    },
    {
        id: "3",
        name: "THE X4",
        brand: "BMW",
        madeCountry: "Germany",
        createDate: "2019-04-20",
        color: "gray",
        img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/163337/x4-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        hp: 231,
        maxSpeed: 219,
        cost: 38_600,
    },
];
