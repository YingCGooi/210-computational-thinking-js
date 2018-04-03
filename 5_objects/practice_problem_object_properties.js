// Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

function objectHasProperty(obj, str) {
  for (pet in obj) {
    if (pet === str) {
      return true;
    }
  }

  return false;
}


// given solution
function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) >= 0;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true


// Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

function incrementProperty(obj, propertyName) {
  if (obj[propertyName]) {
    obj[propertyName] += 1;
  } else {
    obj[propertyName] = 1;
  }

  return obj[propertyName];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.
function copyProperties(source, destination) {
  var count = 0;
  var property;

  for (property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }


// Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(str) {
  var counts = {};
  var words = str.split(' ');
  var i;
  var word;

  for (i = 0; i < words.length; i++) {
    word = words[i];

    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

function hasKey(obj, key) {

}

console.log(wordCount('box car cat bag box')); // { box: 2, car: 1, cat: 1, bag: 1 }