function giveMeFive(obj){
  // setup tab array
  let arr = [];
  
  // traverse through the object using for...in loop
  for (let key in obj) {
    // if key length is 5 push the key to the tab array
    if (key.length === 5) {
      arr.push(key);
    }
    // if the value is a string and equal to 5, push it to the tab array
    if (typeof obj[key] === 'string' && obj[key].length === 5) {
      arr.push(obj[key]);
    }
    
  }
  // return the tab array after traversing through the object
  return arr;
}

//Code Wars solution alternative

// function giveMeFive(obj){
//   var five=[];
//   for (var key in obj) {
//     if (key.length==5) five.push(key);
//     if (obj[key].length==5) five.push(obj[key]);
//   }
//   return five;
// }