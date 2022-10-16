const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {separator = "+", repeatTimes = 1, addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {

  str = str + '';
  addition = addition + '';
  let arr = [];
  let result = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    arr.push(addition);
  }

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + arr.join(additionSeparator));
  }

  return result.join(separator);
}

module.exports = {
  repeater
};
