// importing , exported, files/data/value

// const counter = require("./myModule"); // importing myModule with "require" function
const {inc, dec,getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());

