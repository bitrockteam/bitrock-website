const fs = require('fs-extra');

module.exports = {
    moveDemo(){
        fs.copy('./src/demo', './dist/demo', function(err) {
            if(err){
                console.log(err);
            }
        })
    }
}