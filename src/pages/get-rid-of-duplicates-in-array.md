---
title: "How to get rid of duplicates in arrays..."
date: "2019-05-30"
template: "post"
draft: false
category: "Coding Practices"
tags:
  - "Coding"
  - "JavaScript"
  - "JS Methods"
  - "Programming"
  - "Arrays"
description: "Some examples about how to remove duplicates from an array using JavaScript"
---

##Why are there so many duplicate items in my array?
Duplicate items in an array can be a pain to deal with. They can contaminate your data with unnecessary instances. However, they are a great way for people to test their skills in a coding interview.

##Ways to remove duplicate items in an array

####Using Set Example:

```
function removeDuplicate(array) {
    let array = [1, 2, 2, 3]
    let newArray = [...new Set(array)]
    console.log(newArray)
 }

removeDuplicate([1, 2, 2, 3])
```

Using the `Set` object in this example you are able spread the previous array using the spread operator, `[...]`, and `Set` is unique in that it only allows for unique values. This means that it will remove duplicate occurances. This leaves you with an array that is logged as `[1, 2, 3]`.

####Using the Filter method:

```
let array = [1, 2, 2, 3]

function filter(arr) {
let newArray = array.filter((cur, item) => 
array.indexOf(cur) === item)
console.log(newArray)
}

filter(array)

```

The Filter method can be used to remove those items that are duplicate as well. In this example we can say if the current item is equal to the item it will be removed from our array. The filter method is very useful in this aspect.

Check out the MDN docs on [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to learn more.
