/* Solution: Challenge 3: Net Salary Calculator (Toy Problem) */

function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deduction rates : PAYE rates in effect from 1 July 2023, NHIF rates in effect from 1 April 2015
    const taxRates = [
        { min: 0, max: 24000, rate: 0.10 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.30 },
        { min: 500001, max: 800000, rate: 0.325 }, ]
    const nhifRate = 0.015; // 1.5% NHIF rate - placeholder rate 
    const nssfRate = 0.06; // 6% NSSF rate - 6% of pensionable pay 

    // Calculate gross salary, tax (PAYE), NHIF deductions, NSSF deductions, and net salary 
    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);

    // Return an object containing the calculated values
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
    }