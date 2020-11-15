const tipCalculator = (bill) => {
    return (50 < bill < 300) ? bill * 0.15 : bill * 0.20;
    // if (50 < bill < 300) {
    //     return bill * 0.15
    // }
    // return bill * 0.20
}

console.log(tipCalculator(100));

const bill = [125, 555, 44];
const tips = [ ];
const total = [ ];

bill.forEach(element => {
    tips.push(tipCalculator(element));
    total.push(element + tipCalculator(element));
});

console.log(`tips are: [${tips}]`);
console.log(`totals are: [${total}]`);
console.log(`bills are:  [${bill}]`);