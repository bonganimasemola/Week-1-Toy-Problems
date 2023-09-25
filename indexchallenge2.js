/* Solution: Challenge 2: Speed Detector (Toy Problem) */

function speedDetector(speed) {
// clearly assigning using Let for the events, the events are speed limit (either the driver is driving below, at or above the limit && demeritPoints for when the driver is driving bove the limit of 70)
    let speedLimit = 70;
    let demeritPoints = 0;

//  problem set presents option for detecting speed thus trying if... else statements within a function 
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
    console.log(speedDetector(75))