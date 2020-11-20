const john = {
    name: 'John',
    weight: 92,
    height: 1.95, 
    calcBMI: function(){
        this.BMI = Math.round((this.weight / (this.height ** 2) + Number.EPSILON) * 100) / 100;
        return this.BMI
    }
};

const mark = {
    name: 'Mark',
    weight: 78,
    height: 1.69, 
    calcBMI: function(){
        this.BMI = Math.round((this.weight / (this.height ** 2) + Number.EPSILON) * 100) / 100;
        return this.BMI
    }
};

john.calcBMI();
mark.calcBMI();

console.log(john.BMI);
console.log(mark.BMI);

(john.BMI > mark.BMI)? console.log(`Joh's BMI (${john.BMI}) is higher than Mark's BMI (${mark.BMI})`):console.log(`Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI})`);