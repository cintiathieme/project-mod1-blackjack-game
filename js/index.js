const cards = [
    {name: '2espada', value: 2, img: './images/2-de-espada.png'},
    {name: '3espada',value: 3, img: './images/3-de-espada.png'},
    {name: '4espada',value: 4, img: './images/4-de-espada.png'},
    {name: '5espada',value: 5, img: './images/5-de-espada.png'},
    {name: '6espada',value: 6, img: './images/6-de-espada.png'},
    {name: '7espada',value: 7, img: './images/7-de-espada.png'},
    {name: '8espada',value: 8, img: './images/8-de-espada.png'},
    {name: '9espada',value: 9, img: './images/9-de-espada.png'},
    {name: '10espada',value: 10, img: './images/10-de-espada.png'},
    {name: 'jespada',value: 10, img: './images/valete-de-espada.png'},
    {name: 'qespada',value: 10, img: './images/dama-de-espada.png'},
    {name: 'kespada',value: 10, img: './images/rei-de-espada.png'},
    {name: 'asespada',value: 11, img:'./images/as-de-espada.png'},
];

const firstPage = document.querySelector('#firstPage');
const gameBoard = document.querySelector('#gameBoard');

document.querySelector('.play').addEventListener('click', () => {
    
    firstPage.className = "hide";
    gameBoard.className = "show";
})

let start = document.querySelector('.start')

const game = new Game(cards);

start.addEventListener('click', function click () {
    start.removeEventListener('click', click);
    
    const shuffleCards = game.shuffleCards();
       

    let playersHand = [shuffleCards.cardsPlayer[0].value, shuffleCards.cardsPlayer[1].value]

    let dealersHand = [shuffleCards.cardsDealer[0].value, shuffleCards.cardsDealer[1].value]

    let sumCardsPlayer = game.sumCardsPlayer(playersHand);
    let sumCardsDealer = game.sumCardsDealer(dealersHand);

    if (game.checkIf21(playersHand)) {
        game.winner();
        game.endGame();
    }

    document.querySelector('.hit').addEventListener('click', () => {
       let addCardPlayer = game.addCardPlayer();
    
        playersHand.push(addCardPlayer.value)

        sumCardsPlayer = game.sumCardsPlayer(playersHand)

        if (game.checkIf21(playersHand)) {
            game.winner();
            game.endGame();
        }

        if (game.sumCardsPlayer(playersHand) > 21) {
            let hitDisable = `<div class="buttonDisable">Hit</div>`;
        document.querySelector('#hit').innerHTML = hitDisable;
            game.loser();
            game.endGame();
        } else {
            if (sumCardsDealer < 17) {
                let addCardDealer = game.addCardDealer(sumCardsDealer);
                dealersHand.push(addCardDealer.value)
            
                sumCardsDealer = game.sumCardsDealer(dealersHand);
                
                if (sumCardsDealer > 21) {
                    let hitDisable = `<div class="buttonDisable">Hit</div>`;
                    document.querySelector('#hit').innerHTML = hitDisable;
                    
                    document.querySelector('#dealerSum').innerHTML = `<div class="points"> ${sumCardsDealer}</div>`
                    
                    let card = shuffleCards.cardsDealer.length -1
                    
                    let dealer = `<img id="hideCard" class="show" src="${shuffleCards.cardsDealer[card].img}">`
                    
                    game.winner();
                    game.endGame();
                }
            }   
        }
    });


    document.querySelector('.stand').addEventListener('click', () => {
        let hitDisable = `<div class="buttonDisable">Hit</div>`;
        document.querySelector('#hit').innerHTML = hitDisable;

        let standDisable = `<div class="buttonDisable">Stand</div>`;
        document.querySelector('#stand').innerHTML = standDisable;

        if (sumCardsDealer < 17) {let addCardDealer = game.addCardDealer(sumCardsDealer);
            dealersHand.push(addCardDealer.value)
            sumCardsDealer = game.sumCardsDealer(dealersHand);
        }

        if (sumCardsDealer > 21) {
            document.querySelector('#dealerSum').innerHTML = `<div class="points"> ${sumCardsDealer}</div>`

            let card = shuffleCards.cardsDealer.length -1

            let dealer = `<img id="hideCard" class="show" src="${shuffleCards.cardsDealer[card].img}">`

            game.winner();
            game.endGame();

        } else {
            document.querySelector('#dealerSum').innerHTML = `<div class="points"> ${sumCardsDealer}</div>`
    
            let card = shuffleCards.cardsDealer.length -1
    
            let dealer = `<img id="hideCard" class="show" src="${shuffleCards.cardsDealer[card].img}">`
    
                       
            document.querySelector('#dealerHideCard').innerHTML = dealer;  
            
            console.log("dealer", shuffleCards.cardsDealer.length)
            console.log("player", shuffleCards.cardsPlayer.length)
    
            if (sumCardsPlayer > sumCardsDealer) {
                game.winner();
                game.endGame();
            } else if (sumCardsDealer > sumCardsPlayer) {
                game.loser();
                game.endGame();
            } else {
                if (shuffleCards.cardsDealer.length < shuffleCards.cardsPlayer.length) {
                    game.loser();
                    game.endGame();
                } else {
                    game.winner();
                    game.endGame();
                }
            }
        }    
    });
});



