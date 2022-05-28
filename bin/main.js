#!/usr/bin/env node
import readlineSync from 'readline-sync';

    let woodInStockpile = 15, stoneInStockpile = 10, ironInStockpile = 5;
    const woodIncome = 3, stoneIncome = 2, ironIncome = 2;
    let score = 0;
    const scoreForHouse = 100, scoreForSawmill = 10, scoreForQuarry = 20, scoreForMine = 30;
    let numOfSaws = 1, numOfQuarries = 1, numOfMines = 1, numOfHouses = 0;
    const priceOfSaw = [5, 2, 2], priceOfQuarry = [10, 5, 3], priceOfMine = [25, 20, 1], priceOfHouse = [30, 20, 10]; 

const printStatus = (turn) => {
    //TODO print cost of buildings
    console.log(`ход : ${turn}     счёт : ${score}`);
    console.log(`дрова : ${woodInStockpile}     камешки : ${stoneInStockpile}  железяки : ${ironInStockpile}`);
    console.log(`лесопилки : ${numOfSaws}    карики : ${numOfQuarries}     шахтОчки : ${numOfMines}   хатики : ${numOfHouses}`);
    console.log(`дров в ход : ${woodIncome}   камешков в ход : ${stoneIncome}   гвоздей в ход : ${ironIncome}`);
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
        if ( calcPrice('Saw', 'wood') - woodInStockpile > 0 ) return false;
        if ( calcPrice('Saw', 'stone') - stoneInStockpile > 0  ) return false;
        if ( calcPrice('Saw', 'iron') - ironInStockpile > 0 ) return false;
    } 
    if ( building === 'Quarry' ) {
        if ( calcPrice('Quarry', 'wood') - woodInStockpile > 0 ) return false;
        if ( calcPrice('Quarry', 'stone') - stoneInStockpile > 0 ) return false;
        if ( calcPrice('Quarry', 'iron') - ironInStockpile > 0 ) return false;
    } 
    if ( building === 'Mine' ) {
        if ( calcPrice('Mine', 'wood') - woodInStockpile > 0 ) return false;
        if ( calcPrice('Mine', 'stone') - stoneInStockpile > 0 ) return false;
        if ( calcPrice('Mine', 'iron') - ironInStockpile > 0 ) return false;
    } 
    if ( building === 'House' ) {
        if ( calcPrice('House', 'wood') - woodInStockpile > 0 ) return false;
        if ( calcPrice('House', 'stone') - stoneInStockpile > 0 ) return false;
        if ( calcPrice('House', 'iron') - ironInStockpile > 0 ) return false;
    } 
    return true;
}

const build = (order) => {
    // Строительство ( увеличение счёта, увеличение кол-ва зданий и уменьшение кол-ва ресов на складе )
    if ( order == 1 ) {
        if ( isEnough('Saw') ) {
            increaseScore('Saw'); numOfSaws += 1;
            woodInStockpile -= calcPrice('Saw', 'wood');
            stoneInStockpile -= calcPrice('Saw', 'stone');
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
}

const nextTurn = () => {
    // Функция подсчёта инкама ресурсов
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
    console.log('Тыкай q чтобы выйти');
    while ( turn < 20 ) {
        console.log('Шо рабить?');
        printStatus(turn);
        console.log('1 : строить лесопилку   2 : строить карик    3 : строить шахточку    4 : строить хату   5 : следующий ход');
        const answer = readlineSync.question();
        if ( answer == 5 ) { turn += 1; nextTurn(); }
        else if ( answer != 'q' ) build(answer)
        else break;
    }
    console.log(`Время вышло. Твой счёт = ${score}`);
}
//TODO play the game()
game();