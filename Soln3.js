const netSalaryCalculator = function(basicSalary, benefits){
    
    let grossSalary = basicSalary + benefits

    let PAYE = 0,NHIF = 0,NSSF = 0;


    if (grossSalary <= 24000) {

        PAYE = grossSalary * 0.01;
        
    }else if(grossSalary <= 32333){

        PAYE = grossSalary * 0.25;

    }else if(grossSalary <= 500000){

        PAYE = grossSalary * 0.03;

    }else if (grossSalary <= 800000){
        
        PAYE = grossSalary * 0.325;

    }else{

        PAYE = grossSalary * 0.35;
    }



    if (grossSalary <= 5999) {

        NHIF = 150;

    } else if (grossSalary <= 7999) {

        NHIF = 300;

    } else if (grossSalary <= 11999) {

        NHIF = 400;

    } else if (grossSalary <= 14999) {

        NHIF = 500;

    } else if (grossSalary <= 19999) {

        NHIF = 600;

    } else if (grossSalary <= 24999) {

        NHIF = 750;

    } else if (grossSalary <= 29999) {

        NHIF = 850;

    } else if (grossSalary <= 34999) {

        NHIF = 900;

    } else if (grossSalary <= 39999) {

        NHIF = 950; 

    } else if (grossSalary <= 44999) {

        NHIF = 1000;

    } else if (grossSalary <= 49999) {

        NHIF = 1100;

    } else if (grossSalary <= 59999) {

        NHIF = 1200;

    } else if (grossSalary <= 69999) {

        NHIF = 1300;

    } else if (grossSalary <= 79999) {

        NHIF = 1400;

    } else if (grossSalary <= 89999) {

        NHIF = 1500;

    } else if (grossSalary <= 99999) {

        NHIF = 1600;

    } else {

        NHIF = 1700;

    }



    if (grossSalary <= 7000) {

        NSSF = grossSalary * 0.06;

    } else if (grossSalary <= 36000) {

        NSSF = grossSalary * 0.06;

    }


    let deductions = PAYE + NHIF + NSSF;

    let netSalary = grossSalary - deductions;
    
    return netSalary;
}

netSalaryCalculator(500000, 250000)

