import {SpaceLocation} from './SpaceLocation';


// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Declare (5) Variables With Type
// const spacecraftName: string = 'Determination';
// const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
// const milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars

// const milesToMars: number = kilometersToMars * milesPerKilometer;
// const hoursToMars: number = milesToMars / speedMph;
// const daysToMars: number = hoursToMars / 24;

//make function that rounds to two decimal places



// const daysToMarsRounded: number = roundToTwoDecimals(daysToMars);

// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.






// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor (name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    daysToLocation(kilometersAway: number): number {
        const miles: number = kilometersAway * this.milesPerKilometer;
        const hours: number = miles / this.speedMph;
        const days: number = hours / 24;
        
        return Math.round(days * 100) / 100;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.daysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
    
}


// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// console.log(`
//     It will take ${spaceShuttle.name} approximately ${spaceShuttle.daysToLocation(kilometersToMars)} days to reach Mars. It will take approximately ${spaceShuttle.daysToLocation(kilometersToTheMoon)} to reach the Moon.
// `);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
