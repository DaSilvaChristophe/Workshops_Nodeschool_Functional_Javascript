/*
function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  module.exports = repeat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
*/


/*

Hello World - Exercise 1 of 18


function upperCase (arg) {
    return arg.toUpperCase();
}

// console.log(upperCase('hello world'));

module.exports = upperCase



Basic: Map - Exercise 3 of 18 


function doubleAll(numbers){
  result =  [];
  numbers = 20;
  const map = result.map(numbers => numbers * 2)
  // for(var i = 0; i < numbers.length; i++){
  //   result.push(numbers[i] * 2)
  // }
  return map
}

module.exports = doubleAll

Resources : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



Basic: Filter - Exercise 4 of 18


function getShortMessages(messages){
  messages = [{
    message1: 'Esse id amet quis eu esse aute officia ipsum. ',
    message2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nullam.',
    message3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sit.',
    message4: 'orem ipsum dolor sit amet, consectetur.',
    message5: 'tae molestie. Sed at dapibus metus, vitae viverra massa. Nunc maximus. ',
    message6: 'enatis. Sed et scelerisque est. Ut in tortor ac felis mattis convallis. Vestibulum massa est, ultricies in aliquet ac, malesuada sed ipsum. Ut pellentesque condimentum metus, vitae.',
    message7: 'Nam eget ultricies elit. ',
    message8: 'Aliquam sagittis eget ex.',
    message9: 'Vivamus nibh lorem, dapibus vitae libero vel, dapibus venenatis dolor.',
    message10: 'Cras scelerisque diam id. ',
    message11: 'Pellentesque eu eros lacinia, lacinia felis quis, porta nisi.',
  }
  ]

  const map = messages.map(element => {
    let newFormat = []
    newFormat.push(Object.values(element))
    console.log(newFormat);
    let filter = newFormat[0].filter(word => word.length < 50)
    console.log(filter)
    return filter
  })

  return map[0];
} 

// getShortMessages()
// module.exports = getShortMessages

Ressources : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter and Map JS

*/
