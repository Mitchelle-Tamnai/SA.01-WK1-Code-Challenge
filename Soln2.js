function speedDetector(speed) {
    let speedLimit = 70
    let demeritPointsLimit = 12
    let demeritPoints = 0

    if (speed <= speedLimit) {
        console.log("Ok");
        return "Ok";
    } else {
    
        for (let i = speedLimit; i < speed; i += 5) {
            demeritPoints++;
        }

        console.log(demeritPoints);

        if (demeritPoints > demeritPointsLimit) {
            console.log("License suspended");
            return "License suspended";
        }
    }
}

