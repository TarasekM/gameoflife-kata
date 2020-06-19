var fs = require('fs');

const filename = process.argv.slice(2).length > 0 ? process.argv.slice(2)[0] : "readme";

fs.readFile(__dirname + '/' + filename + '.txt', 'utf8', function (err, content) {
    if (err) throw err;
    console.log(content);
});
