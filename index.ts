// Define the Vehicle interface with required properties and a start method
interface Vehicle {
    make: string;             // The manufacturer of the vehicle (e.g., Toyota)
    model: string;            // The model name of the vehicle (e.g., Camry)
    year: number;             // The year the vehicle was made
    start(): void;            // A method to start the vehicle
}




// Implement the Car class that conforms to the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize the make, model, and year of the car
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implementation of the start method from the Vehicle interface
    start(): void {
        console.log("Car engine started"); // Logs when the car starts
    }
}




// Create an instance of the Car class with example values
const myCar = new Car("Toyota", "Camry", 2022);

// Call the start method on the Car instance to verify it works
myCar.start();  // Output: Car engine started