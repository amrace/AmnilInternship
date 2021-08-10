const employees = [
    {name:"John Doe", grossSalary:9500},
    {name:"Jane Doe", grossSalary:16500},
    {name:"Jim Doe", grossSalary:24999},
    {name:"Josh Doe", grossSalary:37000},
]
//Calculating tax for each employee
const taxSlabs = [
    { gt: 0, lte: 10000, tax: 2},
    { gt: 10000, lte: 20000, tax: 4},
    { gt: 20000, lte: 30000, tax: 7},
    { gt: 30000, lte: 9999999999, tax: 10},
];

 const calculateNetSalary= (grossSalary) =>{
    let totalTax=0;
    let remainingGrossSalary=grossSalary;
    taxSlabs.forEach(slab =>{
        let range= slab.lte - slab.gt;
        let taxableAmount = 0;
        let taxAmount = 0;
           
        if (remainingGrossSalary<=range){
            taxableAmount=remainingGrossSalary;
            remainingGrossSalary=0;
        }else{
            taxableAmount = range;
            remainingGrossSalary = remainingGrossSalary - range;
        }
        taxAmount = taxableAmount *(slab.tax/100);
        totalTax += taxAmount;
    })
    return totalTax;    
} 
employees.map(employee =>{
    console.log(`${employee.name} tax is: ${employee.grossSalary- calculateNetSalary( employee.grossSalary)}`);
})

