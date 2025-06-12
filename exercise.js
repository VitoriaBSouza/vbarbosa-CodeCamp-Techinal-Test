//A few comments:

//I have added the exercise into comments in order to make easy to correct the exercise.
//I left a console.log("_______________") to make easier to see on terminal the answer of each exercise.
//I also added some extras based of some key words on the exercise as well as to make it more complex for myself 
// and apply the knowledge I have on the specifics.
//
//Any feedback is welcome, thanks!
//___________________________________________________________________________________________________________


// Exercise 1: Simple Welcome Message
// Create a function named welcome that takes a name (string) as input. 
// If a name is provided, the function should return a personalized welcome message
// like "Welcome, [Name]!". If no name is provided (i.e., the input is an empty string or undefined/null), 
// it should return a generic "Welcome, Guest!".

// Examples:
// welcome("Maria") should return "Welcome, Maria!"
// welcome("") should return "Welcome, Guest!"
// welcome() should return "Welcome, Guest!"

const welcome = (name) => {

    //Does not allow input: 
    // null, undefined, spaces, blank spaces, special characters or inputs which are not a string
    if (typeof name !== "string" || name.trim() == "" || name.match(/[^\A-Za-z]/)){
        
        return "Welcome, Guest!";
    }

    return `Welcome, ${name}!`;
};

console.log(welcome("Maria"));
console.log(welcome(""));
console.log(welcome());
console.log("_______________");

// Exercise 2: Odd or Even
// Create a function named isEvenOrOdd that takes a single integer as input. 
// The function should return the string "Even" if the number is even, or the string "Odd" if the number is odd.

// Examples:

// isEvenOrOdd(4) should return "Even"
// isEvenOrOdd(7) should return "Odd"
// isEvenOrOdd(0) should return "Even"

const isEvenOrOdd = (int) => {

    //Checks if input is a number and if it's interger
    if(typeof int == "number" && Number.isInteger(int)){
        
        //If it's true will check if it's even 
        if(int % 2 == 0){

            return "Even";
        }

        //If not even will return it's odd
        return "Odd";

    } else{

        //If the input is not a interger number will log a warning message
        return "The input has to be a whole number. Strings or other type data not allowed"
    }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd(0));
console.log("_______________");

// Exercise 3: Find the Largest!
// Create a function named findLargestOfThree that takes three numbers as input
// and returns the largest of the three.

// Examples:

// findLargestOfThree(1, 5, 2) should return 5
// findLargestOfThree(-10, -3, -25) should return -3
// findLargestOfThree(7, 7, 1) should return 7

const findLargestOfThree = (num1, num2, num3) => {

    const largest = Math.max(num1, num2, num3)
    return largest
}

console.log(findLargestOfThree(1, 5, 2));
console.log(findLargestOfThree(-10, -3, -25));
console.log(findLargestOfThree(7, 7, 1));
console.log("_______________");

// Exercise 4: Get Word Length
// Create a function named getWordLength that takes a string (representing a single word) as input 
// and returns its length (the number of characters in the string).

// Examples:

// getWordLength("Hello") should return 5
// getWordLength("TravelPerk") should return 10
// getWordLength("") should return 0

const getWordLength = (string) =>{

    if(typeof string == "number"){

        return "Numbers not allowed. Input has to be a single word."
        
    }

    //Removes the spaces before and after the words
    string = string.trim()

    // Will trim spaces from string to count only
    if (typeof string !== "string" || string.match(/[^\A-Za-z]/)){
        
        return "Input has to be one single word with no special characters."
    }

    return string.length
    
}

console.log(getWordLength("Hello"));
console.log(getWordLength("TravelPerk"));
console.log(getWordLength(""))
console.log("_______________");


// Exercise 5: TravelPerk Suffix Checker!
// Create a function named endsWithPerk that takes a string as input. 
// The function should return true if the string ends with the word "Perk" (case-insensitive), and false otherwise.
// Note: Punctuation or other characters immediately following the word "Perk" should result in false.

const endsWithPerk = (string) =>{

    const contain = "Perk"

    //trim blank spaces from start and end of string
    //then converts to lowercase for easy comparison
    string = string.trim().toLowerCase()

    //Checks if string ends with Perk.
    //It's case-insensitive because we made "Perk" into lower case aka "perk"
    //As all strings now are lower case there is no issue to compare them
    if((string.endsWith(contain.toLowerCase()))){

        return true
    }

    return false
}
//My understanding of the exercise is that even if there is a letter or special character return should be false
// This is because it's stated the string should "end with"
console.log(endsWithPerk("travelPerk "));
console.log("_______________");



// Exercise 6: Recursive Rocket Countdown!
// Write a recursive function called rocketCountdown that takes a positive integer n as input. 
// The function should print each number from n down to 1 (each on a new line in the console), 
// and then finally print "Blastoff!".

function rocketCountdown(n){

    if(n === 0){
        //When reached 0 prints Blastoff and stops
        return console.log("Blastoff");
    }

    console.log(n);
    n--

    //calls itslef again to keep on counting down
    //until we do not reach 0 the count down continues
    rocketCountdown(n)   
}

rocketCountdown(3);

