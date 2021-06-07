import Vehicle from "./Vehicle.js";

/**
 * A class representing a Car.
 * @extends Vehicle
 */
class Car extends Vehicle {
    /**
     * How many seats does the car have
     * @type number
     */
    seatCount;
    /**
     * Create a new Car Instance.
     * @param {number} year - The year of the car's release.
     * @param {string} make - The manufacturer of the car.
     * @param {string} model - The model name of the car.
     * @param {string} color - The Color of the car.
     * @param {number} seatCount - The number of seats the car has.
     */
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

export default Car;