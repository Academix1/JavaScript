### **Theoretical Questions and Answers for Each Concept**

---

### **1. Variables (`let`, `const`, `var`)**

1. **What is the difference between `var`, `let`, and `const`?**  
   - `var` has **function scope** and is **hoisted**. It can be re-declared within the same scope, which can lead to unexpected behavior.
   - `let` and `const` have **block scope** and are not hoisted like `var`. `let` can be reassigned, but `const` cannot.
   
2. **How does hoisting work in JavaScript?**  
   Hoisting is when JavaScript moves variable and function declarations to the top of their scope during execution. However, only `var` declarations are hoisted, not their initializations.

3. **What is the Temporal Dead Zone (TDZ) in JavaScript?**  
   The **Temporal Dead Zone** is the time between entering the scope and the actual declaration of a variable declared with `let` or `const`. During this period, the variable is not accessible and trying to access it results in a `ReferenceError`.

4. **Why is it preferred to use `let` and `const` over `var`?**  
   `let` and `const` provide block-level scoping, which avoids unexpected behavior. `const` guarantees that a variable will not be reassigned, which leads to safer and more predictable code.

5. **What is the significance of the `const` keyword?**  
   `const` declares a variable that cannot be reassigned after initialization, providing a way to ensure immutability for variables that should not change during the program’s execution.

6. **Can a `const` variable hold mutable values?**  
   Yes, a `const` variable can hold mutable values like objects or arrays, meaning you can change the content of the object or array, but you cannot reassign the variable itself to a different value.

7. **What happens when you redeclare a `let` variable?**  
   Redeclaring a `let` variable in the same block scope results in a `SyntaxError` because `let` does not allow redeclaration in the same scope.

8. **What is the difference between global and local scope in JavaScript?**  
   **Global scope** refers to variables or functions accessible throughout the entire program. **Local scope** refers to variables or functions confined to a specific block, function, or block scope (like within loops, functions, or conditionals).

---

### **2. Functions**

1. **What is the difference between a function declaration and a function expression?**  
   - **Function declarations** are hoisted, meaning they can be used before they appear in the code.  
   - **Function expressions** are not hoisted and can only be called after they are defined.

2. **What is the purpose of the `this` keyword inside a function?**  
   The `this` keyword refers to the **context** in which the function was called. In an object method, `this` refers to the object; in regular functions, it refers to the global object (or `undefined` in strict mode).

3. **What are higher-order functions in JavaScript?**  
   Higher-order functions are functions that take other functions as arguments or return functions. They enable functional programming patterns like map, filter, and reduce.

4. **What are closures in JavaScript?**  
   A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope. Closures allow functions to "remember" the environment in which they were created.

5. **What are default parameters in functions?**  
   Default parameters allow a function to be called with fewer arguments than it expects. If an argument is not provided, the function will use the default value specified in the parameter.

6. **What is recursion in JavaScript?**  
   Recursion is when a function calls itself in order to solve a problem. It's used when a task can be divided into smaller, similar sub-tasks (e.g., calculating factorial or traversing tree structures).

7. **How are function parameters passed in JavaScript?**  
   JavaScript function parameters are passed by **value** for primitive types (e.g., numbers, strings) and **reference** for non-primitive types (e.g., objects, arrays).

8. **What is the difference between `function` and `arrow` functions?**  
   Arrow functions are a more concise way to write functions and do not have their own `this` context, unlike regular functions that create a new `this` context each time they are called.

9. **What is the use of the `arguments` object in functions?**  
   The `arguments` object is an array-like object that contains all the arguments passed to a function, even if they are not explicitly defined in the function's parameter list.

10. **How does JavaScript handle `this` in arrow functions?**  
    Arrow functions do not have their own `this`. Instead, they inherit `this` from the enclosing execution context. This behavior makes arrow functions ideal for situations where you want to maintain the same `this` value across functions.

---

### **3. Switch Case & Conditionals**

1. **What is the purpose of the `if-else` statement?**  
   The `if-else` statement is used to execute different blocks of code based on whether a specified condition evaluates to `true` or `false`.

2. **How does the `switch` statement work?**  
   The `switch` statement evaluates an expression and matches it with one of several `case` labels. If a match is found, the corresponding block of code is executed.

3. **What is the difference between `switch` and `if-else`?**  
   `switch` is ideal for checking a single variable against multiple potential values. It is often used when there are multiple possible outcomes. `if-else` is more flexible and can evaluate complex conditions.

4. **Why is the `default` case used in a `switch` statement?**  
   The `default` case is executed when none of the `case` labels match the evaluated expression. It's typically used to handle unexpected values.

5. **How does the `break` statement work in a `switch`?**  
   The `break` statement is used to terminate the `switch` statement. Without `break`, the code will "fall through" and execute all subsequent cases, even if they don't match.

6. **What is the role of logical operators (`&&`, `||`) in `if` statements?**  
   Logical operators combine multiple conditions in an `if` statement. `&&` (AND) ensures all conditions must be true, while `||` (OR) ensures at least one condition must be true.

7. **How do ternary operators work in JavaScript?**  
   The ternary operator is a shorthand for `if-else` statements. It takes the form `condition ? value_if_true : value_if_false`.

8. **What is the purpose of `else if` in conditionals?**  
   `else if` allows you to check multiple conditions in sequence. It follows an `if` statement and allows you to handle multiple, mutually exclusive conditions.

9. **What happens if no `case` matches in a `switch` statement?**  
   If no `case` matches the expression, the code will proceed to the `default` case (if provided) or skip the entire `switch` block.

10. **Can you use expressions or conditions in the `case` of a `switch`?**  
    No, the `case` labels in a `switch` statement must be constant values or expressions that can be evaluated at compile time.

---

### **4. Event Listeners**

1. **What is the purpose of an event listener?**  
   An event listener is a function that waits for a specific event to occur, such as a click or mouse movement, and triggers a callback function when the event happens.

2. **How do event listeners differ from inline event handlers?**  
   Event listeners are added through JavaScript, providing flexibility and the ability to attach multiple listeners to the same event, while inline event handlers are written directly in the HTML markup.

3. **What is event propagation in JavaScript?**  
   Event propagation refers to the process by which an event is passed from the target element to the root of the DOM tree. This process includes **bubbling** (from target to root) and **capturing** (from root to target).

4. **What is event bubbling?**  
   Event bubbling is the phase of event propagation where the event starts at the target element and bubbles up to the root of the DOM, triggering event listeners along the way.

5. **What is event capturing?**  
   Event capturing is the opposite of event bubbling. The event starts from the root and propagates down to the target element. This is a less commonly used propagation method.

6. **Can you prevent an event from propagating?**  
   Yes, you can stop the event from propagating by using `event.stopPropagation()`, which prevents the event from reaching other listeners in the propagation chain.

7. **What is the difference between `addEventListener` and `onclick`?**  
   - `addEventListener` allows multiple event listeners for the same event on an element.  
   - `onclick` can only be used to assign a single event handler to an element, and any subsequent assignments will overwrite the previous one.

8. **What is the purpose of the `this` keyword in event listeners?**  
   In event listeners, `this` refers to the **element** to which the event listener is attached, making it useful to reference properties or methods of that element.

9. **What are passive event listeners, and why are they important?**  
   Passive event listeners improve performance by indicating that the listener will not call `preventDefault()`, allowing the browser to optimize certain interactions, like scrolling.

10. **How do you handle multiple events on the same element?**  
    You can use multiple event listeners to handle different types of events on the same element, such as `click`, `mouseover`, and `keydown`, each triggering a different function.

---

### **5. Objects, Arrays, Maps, and Destructuring**

1. **What is an object in JavaScript?**  
   An object is a collection of key-value pairs, where the keys are strings (or Symbols) and the values can be any data type, including functions, arrays, or other objects.

2. **What is array destructuring in JavaScript?**  
   Array destructuring allows you to unpack values from arrays into separate variables, making it easier to extract elements from an array.

3. **What is the difference between `Map` and an object?**  
   A `Map` allows any type of key, while an object only supports string and Symbol keys. `Map` also maintains the insertion order of key-value pairs.

4. **What is the purpose of the `has` method in a `Map`?**  
   The `has` method is used to check whether a specific key exists in a `Map`, returning `true` if the key is found and `false` otherwise.

5. **What is the purpose of the `get` method in a `Map`?**  
   The `get` method is used to retrieve the value associated with a specific key in a `Map`.

6. **What is an array in JavaScript?**  
   An array is an ordered collection of values, where each value is accessed by its index, starting from 0. Arrays can contain elements of any data type.

7. **What is object destructuring?**  
   Object destructuring allows you to extract values from an object and assign them to variables, making it easier to work with complex objects.

8. **Can you change the properties of a `const` object?**  
   Yes, while a `const` object cannot be reassigned to a new object, you can modify the properties of the object itself.

9. **What are the advantages of using `Map` over objects?**  
   - `Map` allows any data type as keys.  
   - `Map` maintains the insertion order of keys.  
   - `Map` provides built-in methods like `.set()`, `.get()`, and `.has()`, making it easier to work with key-value pairs.

10. **How do you iterate over an object’s properties?**  
    You can use `for...in` loops or `Object.keys()`, `Object.values()`, or `Object.entries()` to iterate over an object's properties.

---
