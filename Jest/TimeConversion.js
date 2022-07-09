function TimeConversion (...args){
    if(args < 60000){
        return Math.floor(args/1000);
    }
}

module.exports = TimeConversion;