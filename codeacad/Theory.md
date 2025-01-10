### **Theoretical Questions and Answers for Each Concept**

---

### **1. Variables (`let`, `const`, `var`)**

1. **What is the difference between `var`, `let`, and `const`?**  
   **Answer:**  
   - `var` has function scope and is hoisted.  
   - `let` has block scope and is not hoisted like `var`.  
   - `const` has block scope and cannot be reassigned.

2. **Can a `const` variable be modified?**  
   **Answer:**  
   The reference of a `const` variable cannot be changed, but the contents of objects or arrays it refers to can be modified.

3. **What is variable hoisting?**  
   **Answer:**  
   Variables declared with `var` are hoisted to the top of their scope, meaning they can be accessed before their declaration but will be `undefined`.

4. **What is the temporal dead zone?**  
   **Answer:**  
   It is the period between the entering of a block scope and the actual declaration of `let` or `const` where accessing the variable will throw a `ReferenceError`.

5. **What happens if you re-declare a `var` variable?**  
   **Answer:**  
   It overwrites the previous declaration, which can lead to bugs.

6. **Can you declare a `let` or `const` variable without initializing it?**  
   **Answer:**  
   `let` can be declared without initialization, but `const` must be initialized during declaration.

7. **What is the scope of a `let` variable declared inside a loop?**  
   **Answer:**  
   It is confined to the block of the loop.

8. **Can `var` and `let` variables be accessed outside their block?**  
   **Answer:**  
   `var` can be accessed outside its block if it is in a function, but `let` is block-scoped.

9. **Why should you use `let` or `const` over `var`?**  
   **Answer:**  
   They provide better scoping, prevent accidental re-declarations, and reduce bugs.

10. **Can you update the value of a `let` variable?**  
    **Answer:**  
    Yes, you can update its value but not re-declare it within the same scope.

---

### **2. Functions**

1. **What are the two main ways to define functions?**  
   **Answer:**  
   Function declarations and function expressions.

2. **What is the difference between a function declaration and a function expression?**  
   **Answer:**  
   Declarations are hoisted, while expressions are not.

3. **What is an arrow function?**  
   **Answer:**  
   A concise syntax for writing functions. It doesn’t bind its own `this`.

4. **Can a function return another function?**  
   **Answer:**  
   Yes, functions in JavaScript are first-class citizens.

5. **What is a higher-order function?**  
   **Answer:**  
   A function that takes another function as an argument or returns a function.

6. **What is a callback function?**  
   **Answer:**  
   A function passed as an argument to another function to be executed later.

7. **What is the default parameter in a function?**  
   **Answer:**  
   A default value assigned to a parameter if no value is passed.

8. **What is recursion in functions?**  
   **Answer:**  
   A function calling itself.

9. **Can functions have properties?**  
   **Answer:**  
   Yes, as functions are objects in JavaScript.

10. **How do closures work?**  
    **Answer:**  
    A closure is a function that retains access to its lexical scope even when executed outside of it.

---

### **3. Switch Case and Conditionals**

1. **What is the syntax of a `switch` statement?**  
   **Answer:**  
   ```javascript
   switch(expression) {
       case value1:
           // code
           break;
       case value2:
           // code
           break;
       default:
           // code
   }
   ```

2. **What is the role of the `break` statement?**  
   **Answer:**  
   It exits the `switch` after a matched case to prevent fall-through.

3. **What happens if `break` is omitted?**  
   **Answer:**  
   The code for all subsequent cases will execute until a `break` is encountered.

4. **Can a `switch` statement evaluate expressions?**  
   **Answer:**  
   Yes, the `switch` can evaluate any expression.

5. **What is the purpose of the `default` case?**  
   **Answer:**  
   It runs when no other cases match.

6. **What is the difference between `if-else` and `switch`?**  
   **Answer:**  
   `if-else` handles complex conditions, while `switch` is better for discrete values.

7. **Can multiple cases execute the same code?**  
   **Answer:**  
   Yes, by not using `break`.

8. **Can `switch` handle ranges?**  
   **Answer:**  
   No, but you can use `if-else` for ranges.

9. **What happens if no cases match and there is no `default`?**  
   **Answer:**  
   The `switch` does nothing.

10. **Is `switch` faster than `if-else`?**  
    **Answer:**  
    For many discrete values, `switch` can be faster due to optimized code execution.

---

### **4. EventListeners**

1. **What is an event listener?**  
   **Answer:**  
   A function that waits for an event to occur.

2. **What is the syntax for `addEventListener`?**  
   **Answer:**  
   ```javascript
   element.addEventListener('event', callbackFunction);
   ```

3. **What is the difference between `addEventListener` and `onclick`?**  
   **Answer:**  
   `addEventListener` allows multiple listeners for the same event, while `onclick` replaces any existing handler.

4. **How do you remove an event listener?**  
   **Answer:**  
   Use `removeEventListener`.

5. **What is event propagation?**  
   **Answer:**  
   The flow of events through the DOM (capturing and bubbling).

6. **What is event bubbling?**  
   **Answer:**  
   The event flows from the target to the root.

7. **What is event capturing?**  
   **Answer:**  
   The event flows from the root to the target.

8. **Can you stop propagation?**  
   **Answer:**  
   Yes, using `event.stopPropagation()`.

9. **How do you handle keyboard events?**  
   **Answer:**  
   Use `keydown`, `keyup`, or `keypress`.

10. **What is the `this` value inside an event listener?**  
    **Answer:**  
    It refers to the element the listener is bound to.

---

### **5. Objects, Arrays, Maps, and Destructuring**

**Objects:**
1. **How do you define an object?**  
   **Answer:**  
   Using `{ key: value }` syntax.

2. **What are the two ways to access properties?**  
   **Answer:**  
   Dot notation and bracket notation.

3. **Can you add properties to an object dynamically?**  
   **Answer:**  
   Yes, using `object.propertyName = value`.

4. **What is object destructuring?**  
   **Answer:**  
   Extracting properties from objects into variables.

**Arrays:**
5. **How do you add elements to an array?**  
   **Answer:**  
   Using `push` or `unshift`.

6. **What is the difference between `map` and `filter`?**  
   **Answer:**  
   `map` transforms elements; `filter` removes elements.

7. **What is array destructuring?**  
   **Answer:**  
   Extracting elements into variables.

**Maps:**
8. **What is a `Map`?**  
   **Answer:**  
   A collection of key-value pairs.

9. **How do you iterate over a `Map`?**  
   **Answer:**  
   Using `for...of` or `.forEach`.

10. **What is the use of the `has` method in `Map`?**  
    **Answer:**  
    To check if a key exists.
