const details = [ 'Gopikrishna', 34, ['Nagalakshmi, 33'], [ 'Karthikeya', 4], '2134PA', 'Hoofddorp', '2134PA', 'Hoofddorp', 'trdy'];

// Array operations examples:-

// Push method adds element to end of the array.

details.push('India');
console.log(details);

// Pop delete 
// 1. last element from the array, if we don't pass any index number.
// 2. if we pass index it deletes it.
//3. if we pass 'string' it deletes it.

details.pop();
// console.log(details);
details.pop(5);
// console.log(details);
details.pop('Hoofddorp');
// console.log(details);

// IndexOf gives index of string

const index = details.indexOf('2134PA');
console.log(index);

// Unshift element to starting of array
// details.unshift('pentyala');

// console.log(details);

// details.shift() // delete first element form array
// console.log(details);

console.log(details.includes('Gopikrishna'));
console.log(details.includes('Netherlands'));