# Documentation: Creating a Calculator with Unified Box Layout and Keydown Event Listeners

This document provides the step-by-step specifications to create a calculator where all elements, including the display and buttons, are enclosed in a single container. The calculator supports input via mouse clicks and keyboard interactions.

---

## Overview

The calculator consists of:
1. A **single container box** that holds the display and buttons.
2. A **display positioned at the top** of the container for showing input and results.
3. Buttons arranged in a **4x4 grid layout**, with a consistent **10-pixel gap** between them.
4. Keyboard support using `keydown` event listeners, including special functionality for Backspace to delete the last character using `slice()`.

---

## Structure

### File Structure
The project will contain three files:
- `index.html`: HTML structure of the calculator.
- `style.css`: Styling for layout, color themes, and responsiveness.
- `script.js`: JavaScript functionality for input handling, calculations, and keyboard interactions.

### Layout Description
- **Main Container**: A single `div` element that contains the display and buttons.
  - Bordered and centered on the screen.
  - Provides padding for neat spacing.
- **Display**: Positioned at the top of the container for showing input and results.
  - Disabled input field to prevent manual typing.
- **Buttons**: Arranged in a 4x4 grid inside the container.
  - Includes numbers, operators, and functional buttons like Clear (`C`), Backspace (`←`), and Equals (`=`).

---

## Specifications

### Display
- **Placement**: Top of the container.
- **Purpose**: Shows input as numbers or operators are added and displays results after calculations.
- **Features**: 
  - Displays the current input/output.
  - Updates dynamically based on mouse or keyboard input.

### Buttons
- **Placement**: Arranged in a 4x4 grid within the container.
- **Spacing**: A consistent **10-pixel gap** between all buttons.
- **Functions**:
  - Numbers (`0-9`) and Decimal (`.`).
  - Operators (`+`, `-`, `*`, `/`).
  - Functional keys:
    - **C**: Clears the display.
    - **←**: Removes the last character (Backspace functionality).
    - **=**: Evaluates the current expression.

### Keyboard Input
- **Event Listener**: Use `keydown` event listeners to enable keyboard interaction.
- **Supported Keys**:
  - **Numbers (0-9)**: Appends numbers to the display.
  - **Operators (+, -, *, /)**: Adds operators to the display.
  - **Backspace**: Removes the last character using the `slice()` method.
  - **Enter or =**: Evaluates the expression.
  - **Escape or C**: Clears the display.

---

## Functional Description

### Container
- All elements (display and buttons) are enclosed in a single container (`calculator-box`).
- The container is styled with a border, padding, and centered alignment.

### Display
- Positioned at the top of the `calculator-box`.
- Shows the current state of the calculator, including:
  - Numbers entered.
  - Operators added.
  - Calculated results.

### Button Layout
- Arranged in a grid with the following layout:
  - Row 1: `C`, `←`, `/`, `*`
  - Row 2: `7`, `8`, `9`, `-`
  - Row 3: `4`, `5`, `6`, `+`
  - Row 4: `1`, `2`, `3`, `=`
  - Row 5: `0`, `.`

### Styling
- **Main Container**:
  - Centralized box containing all elements.
  - Defined spacing and background for clear structure.
- **Display**:
  - Positioned at the top.
  - Larger font for better readability.
- **Buttons**:
  - Consistent size and spacing.
  - Color coding:
    - **Blue**: Numbers and Decimal (`0-9, .`).
    - **Green**: Operators (`+`, `-`, `*`, `/`).
    - **Grey**: Functional keys (`C`, `←`, `=`).

---

## Functional Details

### `display(value)`
- Updates the display with the current value or key pressed.
- Dynamically appends input characters or operators.

### `calculate()`
- Evaluates the mathematical expression entered in the display.
- Supports the basic operations (`+`, `-`, `*`, `/`).
- Handles edge cases, such as dividing by zero or incomplete expressions, using a `switch-case` statement.

### `keydown Event Listeners`
- Listens for keyboard inputs and processes them based on a `switch-case` statement:
  - **Numbers (0-9)**: Appends the respective number to the display.
  - **Operators (+, -, *, /)**: Adds the operator to the display.
  - **Backspace**: Removes the last character using `slice()`.
  - **Enter or =**: Triggers the `calculate()` function.
  - **Escape or C**: Clears the display.

### Backspace Functionality
- Each press of the Backspace key removes the last character from the display.
- Implemented using the `slice(0, -1)` method.

---
