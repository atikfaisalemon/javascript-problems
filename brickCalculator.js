
function brickCalculator(floor){


    if (floor < 11 && floor > 0){
        var bricks = floor * 15 * 1000;
        return bricks;
    }
    else if(floor > 10 && floor<21){
        var bricks = floor * 12 * 1000;
        return bricks;

    }
    else{
        
        var bricks = floor * 10 * 1000;
        return bricks;

    }

}

brickCalculator(4);
console.log(brickCalculator(40));