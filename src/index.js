import Vehicle from "./Vehicle.js";
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Bicycle from "./Bicycle.js";

let main = document.querySelector("main");

let v = new Vehicle(1950, "Moving", "Thing", "green");
let c = new Car(2015, "Chevy", "Spark", "white", 4);
let m = new Motorcycle(2013, "Harley", "Scooter","black","Loud");

main.appendChild(v.generateCard());
main.appendChild(c.generateCard());
main.appendChild(m.generateCard());