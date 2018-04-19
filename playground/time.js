var moment = require('moment');

var date = moment();
// date.add(10, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
console.log(date.format('h:mm a'));

var createdAt = 1234;
var newDate = moment(createdAt);
console.log(newDate.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
