#!/usr/bin/env node
import readlineSync from 'readline-sync';

    let woodInStockpile = 15, stoneInStockpile = 10, ironInStockpile = 5;
    const woodIncome = 3, stoneIncome = 2, ironIncome = 2;
    let score = 0;
    const scoreForHouse = 100, scoreForSawmill = 10, scoreForQuarry = 20, scoreForMine = 30;
    let numOfSaws = 1, numOfQuarries = 0, numOfMines = 0, numOfHouses = 3;
    const priceOfSaw = [5, 2, 2], priceOfQuarry = [10, 5, 3], priceOfMine = [25, 20, 1], priceOfHouse = [30, 20, 10]; 

const printStatus = (turn) => {
    //TODO print cost of buildings
    console.log(`turn : ${turn}     score : ${score}`);
    console.log(`wood : ${woodInStockpile}     stone : ${stoneInStockpile}  iron : ${ironInStockpile}`);
    console.log(`sawmills : ${numOfSaws}    quarries : ${numOfQuarries}     mines : ${numOfMines}   houses : ${numOfHouses}`);
    console.log(`wood income : ${woodIncome}    stone income : ${stoneIncome}   iron income : ${ironIncome}`);
}
//TODO: подробить на функции и раскидать по файлам

const increaseScore = (reason) => {
    //Увеличение счёта за здания
    if ( reason === 'Saw' ) score += scoreForSawmill;
    if ( reason === 'Quarry' ) score += scoreForQuarry;
    if ( reason === 'Mine' ) score += scoreForMine;
    if ( reason === 'House') score += scoreForHouse;
}

const calcPrice = (building, resource) => {
    // Вычисление стоимости зданий
    if ( building === 'Saw') {
        if ( resource === 'wood' ) return priceOfSaw[0];
        if ( resource === 'stone' ) return priceOfSaw[1];
        if ( resource === 'iron' ) return priceOfSaw[2];
    }   
    if ( building === 'Quarry') {
        if ( resource === 'wood' ) return priceOfQuarry[0];
        if ( resource === 'stone' ) return priceOfQuarry[1];
        if ( resource === 'iron' ) return priceOfQuarry[2];
    }   
    if ( building === 'Mine') {
        if ( resource === 'wood' ) return priceOfMine[0];
        if ( resource === 'stone' ) return priceOfMine[1];
        if ( resource === 'iron' ) return priceOfMine[2];
    }   
    if ( building === 'House') {
        if ( resource === 'wood' ) return priceOfHouse[0];
        if ( resource === 'stone' ) return priceOfHouse[1];
        if ( resource === 'iron' ) return priceOfHouse[2];
    }   
    
}

const isEnough = (building) => {
    //Проверка наличия ресурсов на складе
    //TODO message if not enough resources
    if ( building === 'Saw' ) {
        if ( calcPrice('Saw', 'wood') > woodInStockpile ) return false;
        if ( calcPrice('Saw', 'stone') > stoneInStockpile ) return false;
        if ( calcPrice('Saw', 'iron') > ironInStockpile ) return false;
    } 
    if ( building === 'Quarry' ) {
        if ( calcPrice('Quarry', 'wood') > woodInStockpile ) return false;
        if ( calcPrice('Quarry', 'stone') > stoneInStockpile ) return false;
        if ( calcPrice('Quarry', 'iron') > ironInStockpile ) return false;
    } 
    if ( building === 'Mine' ) {
        if ( calcPrice('Mine', 'wood') > woodInStockpile ) return false;
        if ( calcPrice('Mine', 'stone') > stoneInStockpile ) return false;
        if ( calcPrice('Mine', 'iron') > ironInStockpile ) return false;
    } 
    if ( building === 'House' ) {
        if ( calcPrice('House', 'wood') > woodInStockpile ) return false;
        if ( calcPrice('House', 'stone') > stoneInStockpile ) return false;
        if ( calcPrice('House', 'iron') > ironInStockpile ) return false;
    } 
    return true;
}

const build = (order) => {
    // Строительство ( увеличение счёта, увеличение кол-ва зданий и уменьшение кол-ва ресов на складе )
    if ( order == 1 ) {
        if ( isEnough('Saw') ) {
            increaseScore('Saw'); numOfSaws += 1;
            woodInStockpile -= calcPrice('Saw', 'wood');
            stoneInStockpile -= calcPrice('Saw', 'wood');
            ironInStockpile -= calcPrice('Saw', 'iron');
        }
    }
    if ( order == 2 ) {
        if ( isEnough('Quarry') ) {
            increaseScore('Quarry'); numOfQuarries += 1;
            woodInStockpile -= calcPrice('Quarry', 'wood');
            stoneInStockpile -= calcPrice('Quarry', 'wood');
            ironInStockpile -= calcPrice('Quarry', 'iron');
        }
    }
    if ( order == 3 ) {
        if ( isEnough('Mine') ) {
            increaseScore('Mine'); numOfMines += 1;
            woodInStockpile -= calcPrice('Mine', 'wood');
            stoneInStockpile -= calcPrice('Mine', 'wood');
            ironInStockpile -= calcPrice('Mine', 'iron');
        }
    }
    if ( order == 4 ) {
        if ( isEnough('House') ) {
            increaseScore('House'); numOfHouses += 1;
            woodInStockpile -= calcPrice('House', 'wood');
            stoneInStockpile -= calcPrice('House', 'wood');
            ironInStockpile -= calcPrice('House', 'iron');
        }
    }
    printStatus();
}

const nextTurn = () => {
    woodInStockpile += woodIncome * numOfSaws;
    stoneInStockpile += stoneIncome * numOfQuarries;
    ironInStockpile += ironIncome * numOfMines;
}

const action = (order) => {
    //Основная функция обработки действий игрока
    
    //TODO accomplish actions with buildings and nextTurn()
}
const game = () => {
    let turn = 0 ; 
    console.log('press q to exit');
    while ( turn < 20 ) {
        console.log('What should we do, sir?');
        console.log('1 : build a sawmill   2 : build a quarry    3 : build a mine    4 : build a house   5 : next turn');
        printStatus(turn);
        const answer = readlineSync.question();
        if ( answer == 5 ) { turn += 1; nextTurn(); }
        else if ( answer != 'q' ) build(answer)
        else break;
    }
}
//TODO play the game()
game();