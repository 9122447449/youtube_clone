// localstorage size is 5mb
// local storage can store only strings
// CREATE
localStorage.setItem('videoId','8b0ubLO2MUE');

// READ
const id =localStorage.getItem('videoId');
console.log(id);

// Update => same as create

// delete
localStorage.removeItem('videoId'); /// this will just delete the specific
// property

localStorage.clear(); /// this will delete everything

// session storage is same as localstorage
// if you close your tab => all the data will deleted