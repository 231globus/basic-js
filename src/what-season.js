const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

	let seasons = {
	winter: [11, 0, 1],
	spring: [2, 3, 4],
	summer: [5, 6, 7],
	autumn: [8, 9, 10]
}
	if(date === undefined) return "Unable to determine the time of year!"
  if (typeof date.getMonth !== 'function') { throw new Error('Invalid date!') }
  if (Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');

	for(let season in seasons) {
		if(seasons[season].includes(date.getMonth())) {
			return season
		}
	}
}


module.exports = {
  getSeason
};
