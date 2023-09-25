/* Solution: Challenge 1: Student Grade Generator (Toy Problem) */


function studentMarks (score) {
    if (score > 80) {
        return "A";
    } else if (score >= 60 && score <= 70) {
        return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score >= 40 && score <= 49) {
        return "D";
    } else {
        return "E";
    }
}


