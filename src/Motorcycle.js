import Vehicle from "./Vehicle.js";
/**
 * A class representing a Motorcycle.
 * @extends Vehicle
 */
class Motorcycle extends Vehicle {
    /**
     * How loud the Motorcycle is.
     * @type string
     */
    volume;

    /**
     * Create a new Motorcycle Instance.
     * @param {number} year - The year of the motorcycle's release.
     * @param {string} make - The manufacturer of the motorcycle.
     * @param {string} model - The model name of the motorcycle.
     * @param {string} color - The Color of the motorcycle.
     * @param {string} volume - How loud the motorcycle is.
     */
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

export default Motorcycle;