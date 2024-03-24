function studentGradeGenerator(marks) {
    let grade;

    if (marks > 79) {
        grade = "A"

    }else if(marks < 79 && marks >= 60){
        grade = 'B'
    
    }else if(marks < 59 && marks >= 49){
        grade = 'C'

    }else if(marks < 49 && marks >= 40){
        grade = 'D'

    }else {
        grade = 'E'

    }

    return grade
    
}
