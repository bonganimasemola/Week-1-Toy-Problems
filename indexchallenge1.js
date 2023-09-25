/* Solution: Challenge 1: Student Grade Generator (Toy Problem) */


function studentMarks (score) {
    if (score > 80) {
        return "A";

//      problem set hints at multiple options in terms of choice for the grader, thus trying if...else statements in a function
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


console.log(studentMarks(56))

