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
description: "Some use cases for the JavaScript Reduce method"
---

##What is JavaScript Reduce?
The Reduce method that is provided with JavaScript is one that I find extremely helpful and very easy to use. Some of the more heavily utilized methods like Map, Filter, or Find certainly have some great use cases and I have used all of them in my work. There are many others besides those that are extremely popular and helpful. I do enjoy using the reduce method due to it's simplicity. Check out the MDN docs on [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) to learn more.

JavaScript Reduce allows you to take an array of integers and evaluates it down to a single value. This simple function can be extremely helpful when dealing with large sets of data.

##Ways to use JavaScript Reduce

A simple example on how to use reduce is below:

```function simpleArraySum(array) {
     const reducer = ((accumulator, currentValue) => accumulator + currentValue)
     return array.reduce(reducer)
 }

simpleArraySum([5, 8, 7])
```

The output of this function is 20.

A more advanced use of this function could be applied like this:
