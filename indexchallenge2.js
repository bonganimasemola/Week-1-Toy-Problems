/* Solution: Challenge 2: Speed Detector (Toy Problem) */

function speedDetector(speed) {

    let speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        return ("Ok"); 
    } else { 
        demeritPoints = Math.floor((speed - speedLimit) / 5);
          }
        if (demeritPoints > 12) 
            return ("License suspended");
         else {
            return (`Points: ${demeritPoints}`);
        }
      }
    