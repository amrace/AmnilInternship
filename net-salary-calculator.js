const employees = [
    {name:"John Doe", grossSalary:26500},
    {name:"Jane Doe", grossSalary:16500},
    {name:"Jim Doe", grossSalary:24999},
    {name:"Josh Doe", grossSalary:37000},
]
//Calculating tax for each employee
 employees.map((employee)=>{
    if(employee.grossSalary>0 && employee.grossSalary<=10000 ){
        tax = (2/100*employee.grossSalary);
    }else if(employee.grossSalary>10000 && employee.grossSalary<=20000){
        tax = (4/100*employee.grossSalary)-10000*(4/100-2/100); 
    }else if(employee.grossSalary>20000 && employee.grossSalary<=30000){
        tax = (7/100*employee.grossSalary)-10000*(7/100-4/100)-10000*(7/100-2/100);
    }else {
        tax = (10/100*employee.grossSalary)-10000*(10/100-7/100)-10000*(10/100-4/100)-10000*(10/100-2/100);
    } 
    netSalary = employee.grossSalary-tax;  
    console.log(`Salary of ${employee.name} after tax deduction:`+netSalary);  
});