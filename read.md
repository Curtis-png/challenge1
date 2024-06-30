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

