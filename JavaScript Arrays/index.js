// learning oitcomes Arrays and methodes manipulation

//Using Arrays methodes to covert a string into Secret Messages 

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 
'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
'-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// using array methoes to remoce the last string form the message

secretMessage.pop()
console.log(secretMessage)

// length of array
let length = secretMessage.length
console.log(length)

//.push() methode is used to add the string at the end of array
secretMessage.push('hello', 'world')
console.log(secretMessage)

// changing replacing the word in array
secretMessage[7] = 'hard'
console.log(secretMessage)

// how to remove first element of an array
let firstElement = secretMessage.shift()
console.log(firstElement)

//.unshift() is used add something at beginng on array
let first = secretMessage.unshift('Ayna')
console.log(secretMessage)

// remove multiple string and add something new
secretMessage.splice(6, 12, 'chance,')
console.log(secretMessage)

//how to joinn the string to get a secret message
console.log(secretMessage.join(' '))