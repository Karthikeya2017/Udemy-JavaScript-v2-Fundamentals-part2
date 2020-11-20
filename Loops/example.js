// let dice = 0 ;

// while (dice !== 6) {
//     dice = Math.trunc(Math.random() * 6 ) + 1;
//     console.log(`dice value ${dice}`);
// }

const bills = [22, 297, 76, 440, 37, 105, 10, 1100, 86, 82];
const tips = [ ];
const totalAmount = [ ];

const calcTipsAndTotal = (billsArray) => {
    billsArray.forEach(bill => {
        const tip = (50 < bill < 200)? bill * 0.20: bill * 0.10;
        total = bill + tip;
        tips.push(tip);
        totalAmount.push(total);
    });
}

calcTipsAndTotal(bills);
console.log(totalAmount);
console.log(tips);