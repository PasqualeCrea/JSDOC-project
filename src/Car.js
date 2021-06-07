import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    seatCount;
    constructor(year, make, model, color, seatCount) {
        super(year, make, model, color)
        this.seatCount = seatCount;
    }

    generateCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        let icon = document.createElement('i');
        icon.classList.add('icon', 'car');
        card.appendChild(icon);

        let h3 = document.createElement("h3");
        h3.style.color = this.color;
        h3.innerText = `${this.year} ${this.make} ${this.model} (${this.seatCount}Seats)`
        card.appendChild(h3);

        return card;
    }
}