const dolphinScores = [85, 54, 41];
const kolaScores = [23, 34, 27];

const calcAvg = (scoresList) =>{
    const sum = scoresList.reduce((acc, value) => acc + value);
    return sum / (scoresList.length);
}

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
*/
const dolphinAvgScore = calcAvg(dolphinScores);
const kolaAvgScore = calcAvg(kolaScores);

console.info(dolphinAvgScore, kolaAvgScore);

function checkWinner(dolphinAvgScore, kolaAvgScore) {
    if (dolphinAvgScore > 2 * kolaAvgScore) {
        return `dolphins win (${dolphinAvgScore} vs. ${kolaAvgScore})`;
    } else if (kolaAvgScore > 2 * dolphinAvgScore){
        return `kolas win (${dolphinAvgScore} vs. ${kolaAvgScore})`;
    } else {
        return `no team wins`;
    }
}

console.log(checkWinner(dolphinAvgScore, kolaAvgScore));
