console.log(calcAge1(1986));

//function declaration
function calcAge1(birthYear){
    return ` ${2020 - birthYear}`;
}

// Arrow functions

const calcAge2 = birthYear => ({
    age: parseInt(`${2020 - birthYear}`)
})

console.log(calcAge2(1987));