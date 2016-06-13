/*
 * Returns a range of numbers as an array
 * Can be a descending or ascending list
 *
 * Takes an optional third paramter to indicate at which rate the list should
 * grow
 *
 * @param {number} start - The first value in the range (including)
 * @param {number} end - The last value in the range (including)
 * @param {number} increment - Rate at which the range changes, default is 1
 * @return {array} - An ascending or descending list
 * */
function range(start, end, increment = 1) {

    // Type checking
    if (typeof start !== 'number') throw TypeError('start should be of type Number');
    if (typeof end !== 'number') throw TypeError('end should be of type Number');
    if (typeof increment !== 'number') throw TypeError('end should be of type Number');

    // Sanity warnings
    if (increment === 0) throw Error('increment can\'t be 0');
    if (increment < 0 && typeof console !== 'undefined') console.warn('A negative increment value will always be converted to a positive one');

    let list = [start];
    if (start === end) return list;
    increment = Math.abs(increment);

    // Negotiate the incrementor to accomodate for the other direction
    if (start > end) increment = -increment;

    // Keep track of the list
    let progress = 0;

    // Add to the list until the limit is passed
    while (progress < Math.abs(start - end)) {

        // If the last number is bigger than the limit, break
        if (progress > Math.abs(start - end)) break;

        // Icrement the counter and add to the list
        progress += increment;
        list.push(list[list.length - 1] + increment);
    }

    return list;
}

module.exports = range;
