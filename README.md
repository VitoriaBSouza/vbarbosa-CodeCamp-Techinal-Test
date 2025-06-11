# vbarbosa-CodeCamp-Techinal-Test

## TravelPerk CodeCamp 2025 - Technical Test

### Exercise 1: Simple Welcome Message

Create a function named `welcome` that takes a name (string) as input.
If a name is provided, the function should return a personalized welcome message like `"Welcome, [Name]!"`.
If no name is provided (i.e., the input is an empty string or `undefined`/`null`), it should return a generic `"Welcome, Guest!"`.

**Examples:**

* `welcome("Maria")` should return `"Welcome, Maria!"`
* `welcome("")` should return `"Welcome, Guest!"`
* `welcome()` should return `"Welcome, Guest!"`

### Exercise 2: Odd or Even

Create a function named `isEvenOrOdd` that takes a single integer as input. The function should return the string `"Even"` if the number is even, or the string `"Odd"` if the number is odd.

**Examples:**

* `isEvenOrOdd(4)` should return `"Even"`
* `isEvenOrOdd(7)` should return `"Odd"`

`isEvenOrOdd(0)` should return `"Even"`
### Exercise 3: Find the Largest!

Create a function named `findLargestOfThree` that takes three numbers as input and returns the largest of the three.

**Examples:**

* `findLargestOfThree(1, 5, 2)` should return `5`
* `findLargestOfThree(-10, -3, -25)` should return `-3`
* `findLargestOfThree(7, 7, 1)` should return `7`

### Exercise 4: Get Word Length

Create a function named `getWordLength` that takes a string (representing a single word) as input and returns its length (the number of characters in the string).

**Examples:**

* `getWordLength("Hello")` should return `5`
* `getWordLength("TravelPerk")` should return `10`
* `getWordLength("")` should return `0`

### Exercise 5: TravelPerk Suffix Checker!

Create a function named `endsWithPerk` that takes a string as input. The function should return `true` if the string ends with the word `"Perk"` (case-insensitive), and `false` otherwise. Note: Punctuation or other characters immediately following the word `"Perk"` should result in `false`.

**Examples:**

* `endsWithPerk("Welcome to TravelPerk")` should return `true`
* `endsWithPerk("Our best travel perk")` should return `true`
* `endsWithPerk("Book with travelperk")` should return `true`
* `endsWithPerk("TravelPerks are amazing")` should return `false`
* `endsWithPerk("This is a TravelPerk!")` should return `false`
* `endsWithPerk("Perk up your day")` should return `false`

### Exercise 6: Recursive Rocket Countdown!

Write a *recursive* function called `rocketCountdown` that takes a positive integer `n` as input. The function should print each number from `n` down to 1 (each on a new line in the console), and then finally print `"Blastoff!"`.

**Example:** Calling `rocketCountdown(3)` should produce the following console output:

```
3
2
1
Blastoff!
```

Calling `rocketCountdown(1)` should produce:

``` 1 Blastoff! ```