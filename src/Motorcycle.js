import Vehicle from "./Vehicle.js";

export default class Motorcycle extends Vehicle {
    volume;
    constructor(year, make, model, color, volume) {
        super(year, make, model, color)
        this.volume = volume;
    }
    generateCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        let icon = document.createElement('i');
        icon.classList.add('icon', 'motorcycle');
        card.appendChild(icon);

        let h3 = document.createElement("h3");
        h3.style.color = this.color;
        h3.innerText = `${this.year} ${this.make} ${this.model} (${this.volume})`
        card.appendChild(h3);

        return card;
    }
}