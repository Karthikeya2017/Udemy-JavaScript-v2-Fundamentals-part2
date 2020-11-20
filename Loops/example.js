let dice = 0 ;

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6 ) + 1;
    console.log(`dice value ${dice}`);
}