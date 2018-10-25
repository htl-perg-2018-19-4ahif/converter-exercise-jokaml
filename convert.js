const converter = require("convert-units");
if (process.argv.length == 6 && !isNaN(process.argv[2]) && process.argv[4] == "to") {
    try {
        let result = converter(process.argv[2]).from(process.argv[3]).to(process.argv[5]);
        console.log(process.argv[2] + " " + process.argv[3] + " are " + result + " " + process.argv[5]);
    } catch (e) {
        console.log("Invalid parameters");
    }
} else console.log("Invalid parameters");