## Day6

### Objects

   #### **Q1:** Write a code snippet to create an object called `book` with the following properties:
      
   - `title`: "JavaScript Fundamentals"
   - `author`: "John Doe"
   - `year`: 2022
   - `isAvailable`: true
     
   **A**
   
         ```javascript
         const book = {
           title: "JavaScript Fundamentals",
           author: "John Doe",
           year: 2022,
           isAvailable: true
         };
         console.log(book);
         ````
   
   #### **Q2:** Add a method getDiscountedPrice to the object product which returns a discounted price (10% off) for a given price. The object has properties:
   - name: 'Laptop'
   - price: 1000

     **A**

     ```js
           const product = { name: 'Laptop', price: 1000 };
         product.getDiscountedPrice = function() {
           return this.price - (this.price * 0.10);
         };
         console.log(product.getDiscountedPrice()); // 900

     ```
   
   #### **Q3:** Create an object with a dynamic key color where the value of the key is "Red". Use a variable to store the key name.
   
   **A**
    ```js
       const key = 'color';
       const obj = {
         [key]: 'Red'
       };
       console.log(obj.color); // Red
     ```
  
   #### **Q4:** Create an object student with the following properties:
   - name: 'Alice'
   - age: 20
   - address: a nested object with properties: street, city, and zipCode.
   
   **A**
       ```js
       const student = {
         name: 'Alice',
         age: 20,
         address: {
           street: '123 Main St',
           city: 'New York',
           zipCode: '10001'
         }
       };
       console.log(student);
       ```
   #### **Q5:** Create a constructor function Person that accepts name, age, and city as parameters and returns an object with those properties.
   
   **A**
     
      ````js
     function Person(name, age, city) {
       this.name = name;
       this.age = age;
       this.city = city;
     }
     const person1 = new Person('John', 28, 'New York');
     console.log(person1);
   
      ````
### Destructure of Objects
