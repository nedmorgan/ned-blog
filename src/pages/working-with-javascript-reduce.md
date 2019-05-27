---
title: "Great uses for JavaScript Reduce method"
date: "2019-05-27"
template: "post"
draft: false
category: "Coding Practices"
tags:
  - "Coding"
  - "JavaScript"
  - "JS Methods"
  - "Programming"
  - "Arrays"
description: "Some use cases for the JavaScript Reduce method"
---

##What is JavaScript Reduce?
The Reduce method that is provided with JavaScript is one that I find extremely helpful and very easy to use. Some of the more heavily utilized methods like Map, Filter, or Find certainly have some great use cases and I have used all of them in my work. There are many others besides those that are extremely popular and helpful. I do enjoy using the reduce method due to it's simplicity. Check out the MDN docs on [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) to learn more.

JavaScript Reduce allows you to take an array of integers and evaluates it down to a single value. This simple function can be extremely helpful when dealing with large sets of data.

##Ways to use JavaScript Reduce

####Simple Example:

```
function simpleArraySum(array) {
     const reducer = ((accumulator, currentValue) => accumulator + currentValue)
     return array.reduce(reducer)
 }

simpleArraySum([5, 8, 7])
```

Each value is passed into the function and the three values are then reduced down to one value, which becomes the sum of all of the values. The output of this function is 20.

####Advanced Example:

```
let groceryList = [
  {
    food: "apple",
    cost: 1.05,
    quantity: 3
  },
  {
    food: "orange",
    cost: .87,
    quantity: 4
  },
  {
    food: "banana",
    cost: .55,
    quantity: 6
  }
]

function getGroceryTotal(arr) {
  let initialValue = 0
  const taxRate = .09
  let sum = groceryList.reduce((accumulator, currentValue) =>
    accumulator + (currentValue.cost * currentValue.quantity)
  , initialValue)
  let valueWithTax = sum + (sum * taxRate)
  console.log(`Groceries total: $${valueWithTax.toFixed(2)}`)
}

getGroceryTotal(groceryList)
```

The `initialValue` variable is needed in order for each item to passed properly through the function. Using an arrow function also allows for the code to be shortened.

The output of this function would be, Groceries total: \$10.82. Using string interpolation for the final sum makes things a little cleaner. Through this method you can adjust the tax rate and the value would then change based upon that.

Using this for an array of objects is quite helpful because lessens the amount of code needed to accomplish the task of finding the sum, especially if you have an extensive array of objects.
