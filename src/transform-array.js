const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

	let transArr = []
	for(let i=0;i<arr.length;i++) {
		if(arr[i] === '--discard-next'){
			i++;
		}
		else if(arr[i] === '--discard-prev') {
			if(arr[i] == 0) i++
		 	transArr.splice(i-1, 1)
		}
		else if(arr[i] === '--double-next') {
			
		}
		else if(arr[i] === '--double-prev') {
			
		}
		else {
			transArr.push(arr[i])
		}
		
	}
	return transArr
}

console.log(transform([ '--discard-prev', 1, 2, 3,'--discard-prev', 4, 5,  6, 7, '--discard-prev']))

module.exports = {
  transform
};
