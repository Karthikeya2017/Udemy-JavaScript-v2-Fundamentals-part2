const jonas = {
    firstName: 'Jonas',
    lastName: 'schugman',
    friends: ['Michel', 'piter', 'jay'],
    job: 'teacher',
    hasDrivingLicene: true,
    birthYear: 1990,
    calcAge: function(){
        return 2020 - this.birthYear;
    },
    details: function(){
        return `jonas is ${this.calcAge()} old ${this.job}, and he has a driver's license`
    }
}

console.log(jonas.details());

