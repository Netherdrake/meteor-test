var steem = require('steem');

steem.broadcast.vote("WIF_HERE", "fnait", "steemfest",
    "steemfest-livestream-recordings-main-hall", 10000, function(err, result) {
    console.log(err, result);
});