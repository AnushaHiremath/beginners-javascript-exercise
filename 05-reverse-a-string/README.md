# `05` Reverse a string

Write a program to reverse a string

- String can be reversed by iterating it and storing it in reverse order

```js 
const str = "JavaScript is awesome"
let reversedString = "";
for(let i = 0; i < str.length; i++){
    reversedString = str.charAt(i) + reversedString;
}

console.log(reversedString);                              
```

References:
- https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/