function feetToMeter(num){
    
    var meter = num / 3.281;
    return meter;

}

result = Math.ceil(feetToMeter(10));
console.log(result);