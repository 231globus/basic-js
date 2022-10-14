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

   if(!Array.isArray(arr)) return "'arr' parameter must be an instance of the Array!"
   
	for(let i=0;i<arr.length;i++) {
		if(arr[i] === '--discard-next'){
			i++;
		}
		else if(arr[i] === '--discard-prev') {
			if(transArr.length > 0) 
        if(transArr[transArr.length-1] === arr[i-1]){
          transArr.pop()
        }
		}
		else if(arr[i] === '--double-next') {
      if(arr.length>i+1) {
        transArr.push(arr[i+1])
      }
		}
		else if(arr[i] === '--double-prev') {
			if(transArr.length > 0) {
        if(transArr[transArr.length-1] === arr[i-1]) {
          transArr.push(arr[i-1])
        }
      }
		}
		else {
			transArr.push(arr[i])
		}
		
	}
	return transArr
}

module.exports = {
  transform
};
