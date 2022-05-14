import readlineSync from 'readline-sync';

    let woodInStockpile = 15, stoneInStockpile = 10, ironInStockpile = 5;
    let turn = 0;
    const woodIncome = 3, stoneIncome = 2, ironIncome = 2;
    let score = 0;
    const scoreForHouse = 100, scoreForSawmill = 10, scoreForQuarry = 20, scoreForMine = 30;
    let numOfSaws = 1, numOfQuarries = 0, numOfMines = 0, numOfHouses = 3;
    const priceOfSaw = [5, 2, 2], priceOfQuarry = [10, 5, 3], priceOfMine = [25, 20, 1], priceOfHouse = [30, 20, 10]; 

const printStatus = () => {
    console.log(`turn : ${turn}     score : ${score}`);
    console.log(`wood : ${woodInStockpile}     stone : ${stoneInStockpile}  iron : ${ironInStockpile}`);
    console.log(`sawmills : ${numOfSaws}    quarries : ${numOfQuarries}     mines : ${numOfMines}   houses : ${numOfHouses}`);
    console.log(`wood income : ${woodIncome}    stone income : ${stoneIncome}   iron income : ${ironIncome}`);
}
//TODO: Сделать проверку наличия ресурсов на складе, сделать строительство, подробить на функции и раскидать по файлам
const isEnough = (type) => {

}

const build = (order) => {

}

const action = (order) => {
    if ( order == 1 ) printStatus();
}

const game = () => {
    
    for (turn; turn <= 20; turn += 1) {
        console.log('What should we do, sir?');
        console.log('1 : status     2 : build a sawmill   3 : build a quarry    4 : build a mine    5 : build a house');
        const answer = readlineSync.question();
    }
}