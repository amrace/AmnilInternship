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

taxSlabs.forEach(slab =>{
    let range = slab.lte - slab.gt;
    let remaininggross=0;

    if()
})