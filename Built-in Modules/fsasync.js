const {readFile, writeFile} = require('fs');

let file1 = null;
let file2 = null;

readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.error(`ERROR: ${err}`);
    }
    console.log(result);
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {
    
            console.error(`ERROR: ${err}`);
    
        }
    
        console.log(result);
        
        const second = result;
     
        writeFile('./content/result-sync.txt', `First: ${first} \nSecond: ${second}`, (err, result) => {
            if (err) {
        
                console.error(`ERROR: ${err}`);
        
            }
        
            console.log(result);
        });
    });

});




