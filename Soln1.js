function studentGradeGenerator(marks) {
    let grade;

    if (marks >= 80 && marks <= 100) {
        grade = "A";

    }else if(marks >= 60 && marks < 80){
        grade = 'B';
    
    }else if(marks >= 50 && marks < 60){
        grade = 'C';

    }else if(marks >= 40 &&marks < 50){
        grade = 'D';

    }else if (marks >=0 && marks < 40){
        grade = 'E';

    }else {
        grade = "Invalid marks";
    }

    return grade
    
}
