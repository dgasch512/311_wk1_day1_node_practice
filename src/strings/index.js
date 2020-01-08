const split = (str, delim) => {
  // write code for strings.split
  // create new array
  // split the str into strings at delim
  let arrOfStrings = str.split(delim);
  return arrOfStrings;
}

const pairs = (str) => {
  // write code for strings.pairs
  // create new arr
  let arrOfPairs = [];
  // run for loop incrementing by 2
  for (let i = 0; i < str.length; i += 2) {
    // push letters to new string in pairs starting at index
    arrOfPairs.push(str.substr(i,2))
  }
  return arrOfPairs
}

const reverse = (str) => {
  // write code for strings.reverse
  // split to array, reverse arr, then join back together
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}