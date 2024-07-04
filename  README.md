studentgrade.js

---

# Grade Function

The `Grade()` function is a JavaScript function designed to determine the grade based on a given score input. It categorizes scores into grades 'A', 'B', 'C', 'D', or 'E' according to specified score ranges.

## Function Description

The function takes a numeric `score` as an argument and logs the corresponding grade to the console. It includes error handling for scores outside the valid range of 0 to 100.

### Grade Ranges

- **A**: 80 - 100
- **B**: 60 - 79
- **C**: 50 - 59
- **D**: 40 - 49
- **E**: 0 - 39

### Usage

To use the `Grade()` function, call it with a numeric score as an argument:

```javascript
Grade(85);  // Output: A
Grade(72);  // Output: B
Grade(55);  // Output: C
Grade(43);  // Output: D
Grade(25);  // Output: E
Grade(105); // Output: Invalid input. Score must be between 0 and 100.
```

### Error Handling

If the input score is outside the range of 0 to 100, the function will output:
```
Invalid input. Score must be between 0 and 100.
```

### Notes

- Ensure the function is called with a valid numeric score between 0 and 100.
- Scores are categorized inclusively based on the specified grade ranges.

---

speeddetector.js



# Speedcheck Function

The `speedcheck` function is a JavaScript function designed to evaluate a driver's speed against a predefined speed limit and determine demerit points based on the excess speed.

## Functionality

When you call the `speedcheck` function with a speed parameter:
- It compares the given speed against a speed limit of 70 km/h.
- If the speed is within the limit, it outputs `"Ok"`.
- If the speed exceeds the limit, it calculates demerit points based on the excess speed:
  - Demerit points are calculated using the formula: `(speed - speedLimit) / 5`.
  - If the calculated demerit points exceed 12, it outputs `"License suspended"`.
  - Otherwise, it outputs the number of demerit points accumulated.

## Usage

To use the `speedcheck` function:
- Call `speedcheck(speed)` where `speed` is the driver's speed in km/h.
- Example:
  ```javascript
  speedcheck(150); // Output: "License suspended"
  ```

## Example Scenarios

- **Scenario 1**: Speed within limit
  ```javascript
  speedcheck(60); // Output: "Ok"
  ```

- **Scenario 2**: Speed exceeds limit, but below license suspension threshold
  ```javascript
  speedcheck(90); // Output: "Points: 4"
  ```

- **Scenario 3**: Speed exceeds license suspension threshold
  ```javascript
  speedcheck(160); // Output: "License suspended"
  ```

---
net salary
Certainly! Here's a simple `README.md` file that you can include with your code to explain its purpose and usage:

```markdown
# Salary Calculation Program

This program calculates the net salary based on the input of basic salary and benefits, applying deductions such as PAYE, NHIF, NSSF, and Housing Levy.

## Features

- **Input Handling**: Prompts the user to enter the basic salary and benefits.
- **Validation**: Checks if inputs are valid (numeric and greater than zero).
- **Calculation**:
  - Calculates the gross salary by summing basic salary and benefits.
  - Calculates PAYE based on gross salary bands.
  - Determines NHIF deductions based on gross salary ranges.
  - Computes NSSF deductions as 6% of the gross salary.
  - Computes Housing Levy as 1.5% of the gross salary.
  - Calculates the net salary after deducting PAYE, NHIF, NSSF, and Housing Levy.

## Usage

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the directory:

   ```bash
   cd <repository-directory>
   ```

3. Install dependencies (if any).

4. Run the program:

   ```bash
   node <filename.js>
   ```

5. Follow the prompts to enter the basic salary and benefits.

6. View the calculated salary details including gross salary, deductions, and net salary.

## Example

Here is an example of how the program works:

```bash
$ node salaryCalculator.js
Enter basic salary: 50000
Enter benefits: 10000
Gross Salary: 60000
PAYE: 9000
NHIF Deductions: 1200
NSSF Deductions: 3600
Housing Levy: 900
Net Salary: 45300
```

In this example:
- Basic salary entered: 50000
- Benefits entered: 10000
- Gross salary calculated: 60000
- PAYE deducted: 9000
- NHIF deductions: 1200
- NSSF deductions: 3600
- Housing levy: 900
- Net salary: 45300

## Notes

- Ensure inputs for basic salary and benefits are numeric and greater than zero for accurate calculations.
- Review the code for specific details on calculation logic and salary bands for deductions.
```

In this `README.md`:

- **Description**: It provides a brief overview of what the program does.
- **Features**: Lists the main features and functionalities of the program.
- **Usage**: Gives instructions on how to use the program, including installation and running steps.
- **Example**: Shows an example of running the program with sample inputs and the expected output.
- **Notes**: Provides additional notes or considerations for users using the program.

Replace `<repository-url>`, `<repository-directory>`, `<filename.js>`, and customize the example based on your actual implementation and file names. This `README.md` should help users understand how to interact with your salary calculation program effectively.
