/**
 * A class representing a generic vehicle.
 */
class Vehicle {
    /**
     * The year of the vehicle's release.
     * @type number
     */
    year;
    /**
     * The manufacturer of the vehicle.
     * @type string
     */
    make;
    /**
     * The model name of the vehicle.
     * @type string
     */
    model;
    /**
     * The Color of the vehicle
     * @type string
     */
    color;

    /**
     * Create a new Vehicle Instance.
     * @param {number} year - The year of the vehicle's release.
     * @param {string} make - The manufacturer of the vehicle.
     * @param {string} model - The model name of the vehicle.
     * @param {string} color - The Color of the vehicle.
     */
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    /**
     * Creates and returns an HTML Node based on the Vehicle.
     * @returns Node
     */
    generateCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        let icon = document.createElement('i');
        icon.classList.add('icon', 'vehicle');
        card.appendChild(icon);

        let h3 = document.createElement("h3");
        h3.style.color = this.color;
        h3.innerText = `${this.year} ${this.make} ${this.model}`
        card.appendChild(h3);

        return card;
    }
}
export default Vehicle;