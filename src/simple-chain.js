const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
   this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if(position<1 || position>this.arr.length-1)
      throw new Error("You can't remove incorrect link!")
    this.arr.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let str = this.arr.join('~~')
    return str
  }
};

module.exports = {
  chainMaker
};
