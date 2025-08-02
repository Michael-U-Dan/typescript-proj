
📄 README.md
markdown
Copy
Edit
# 🚗 Vehicle Interface TypeScript Project

This is a simple TypeScript project that demonstrates how to define and implement an interface in TypeScript. It features a `Vehicle` interface and a `Car` class that implements the interface.

---

## 📘 Features

- Defines a `Vehicle` interface with:
  - `make`, `model`, and `year` properties
  - A `start()` method

- Implements the interface using a `Car` class
- Demonstrates use of:
  - TypeScript interfaces
  - Public constructor property declarations
  - Arrow function methods (modern syntax)
- Includes clear comments and modern code style

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

To install TypeScript globally:

```bash
npm install -g typescript
🚀 Getting Started
Clone the repo or copy the files

Create the TypeScript file

Save this as index.ts:

ts
Copy
Edit
// Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Car class implementing Vehicle
class Car implements Vehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    start = (): void => {
        console.log("🚗 Vroom! Car engine started.");
    };
}

// Create and start the car
const myCar = new Car("Mazda", "MX-5 Miata", 2024);
myCar.start();
Compile the TypeScript code

bash
Copy
Edit
tsc index.ts
This will generate index.js.

Run the JavaScript output

bash
Copy
Edit
node index.js
You should see:

Copy
Edit
🚗 Vroom! Car engine started.
📁 Project Structure
graphql
Copy
Edit
project-root/
├── index.ts       # Main TypeScript file
├── index.js       # Compiled JavaScript file (generated)
└── README.md      # This file
