//Complete for bonus points
import Vehicle from "./Vehicle.js";
/**
 * A class representing a Bicycle.
 * @extends Vehicle
 */
class Bicycle extends Vehicle {
    /**
     * Is the bicycle a tenspeed.
     * @type boolean
     */
    tenSpeed;
    /**
     * What type of tires does the bike have.
     * @type string
     */
    tireType;
    /**
     * Create a new Bicycle Instance.
     * @param {number} year - The year of the Bicycle's release.
     * @param {string} make - The manufacturer of the Bicycle.
     * @param {string} model - The model name of the Bicycle.
     * @param {string} color - The Color of the Bicycle.
     * @param {boolean} tenSpeed  - Is the Bicycle a ten-speed.
     * @param {string} tireType - What kind of tires does the Bicycle have.
     */
    constructor(year, make, model, color, tenSpeed, tireType) {
        super(year, make, model, color);
        this.tenSpeed = tenSpeed;
        this.tireType = tireType;
    }

    generateCard(){
        let card = document.createElement('div');
        card.classList.add('card');

        let icon = document.createElement('i');
        icon.classList.add('icon', 'bicycle');
        card.appendChild(icon);
        let h3 = document.createElement("h3");

        h3.style.color = this.color;
        h3.innerText = `${this.year} ${this.make} ${this.model} Ten-Speed:${this.tenSpeed} Tires:(${this.tireType})`;
        card.appendChild(h3);

        return card;
    }
}

export default Bicycle;