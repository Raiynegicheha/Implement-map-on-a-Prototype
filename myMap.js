Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i = 0; i<this.length;i++){
    newArray.push(callback(this[i],i,this))
    // this[i] is the current element being processed
    // i is the index of the element
    // this is the array being iterated
  }
  // Only change code above this line
  return newArray;
};
