const cards = [
    {name: '2-hearts', value: 2, img: './images/hearts-2.png'},
    {name: 'q-hearts',value: 10, img: './images/hearts-Q.png'},
    {name: '3-hearts',value: 3, img: './images/hearts-3.png'},
    {name: '8-diamonds',value: 8, img: './images/diamonds-8.png'},
    {name: 'k-hearts',value: 10, img: './images/hearts-K.png'},
    {name: '4-spades',value: 4, img: './images/spades-4.png'},
    {name: '3-diamonds',value: 3, img: './images/diamonds-3.png'},
    {name: '10-clubs',value: 10, img: './images/clubs-10.png'},
    {name: '6-clubs',value: 6, img: './images/clubs-6.png'},
    {name: 'q-diamonds',value: 10, img: './images/diamonds-Q.png'},
    {name: '2-spades', value: 2, img: './images/spades-2.png'},
    {name: '4-diamonds',value: 4, img: './images/diamonds-4.png'},
    {name: '10-hearts',value: 10, img: './images/hearts-10.png'},
    {name: '6-spades',value: 6, img: './images/spades-6.png'},
    {name: '5-spades',value: 5, img: './images/spades-5.png'},
    {name: 'j-spades',value: 10, img: './images/spades-J.png'},
    {name: 'k-spades',value: 10, img: './images/spades-K.png'},
    {name: '2-clubs', value: 2, img: './images/spades-2.png'},
    {name: 'q-spades',value: 10, img: './images/spades-Q.png'},
    {name: '3-clubs',value: 3, img: './images/clubs-3.png'},
    {name: '5-hearts',value: 5, img: './images/hearts-5.png'},
    {name: '4-clubs',value: 4, img: './images/clubs-4.png'},
    {name: '6-hearts',value: 6, img: './images/hearts-6.png'},
    {name: '2-diamonds', value: 2, img: './images/diamonds-2.png'},
    {name: '6-diamonds',value: 6, img: './images/diamonds-6.png'},
    {name: 'k-clubs',value: 10, img: './images/clubs-K.png'},
    {name: '7-spades',value: 7, img: './images/spades-7.png'},
    {name: '9-diamonds',value: 9, img: './images/diamonds-9.png'},
    {name: 'as-clubs',value: 11, img:'./images/clubs-A.png'},
    {name: '7-hearts',value: 7, img: './images/hearts-7.png'},
    {name: '10-spades',value: 10, img: './images/spades-10.png'},
    {name: 'as-spades',value: 11, img:'./images/spades-A.png'},
    {name: '7-diamonds',value: 7, img: './images/diamonds-7.png'},
    {name: 'as-diamonds',value: 11, img:'./images/diamonds-A.png'},
    {name: '3-spades',value: 3, img: './images/spades-3.png'},
    {name: '5-clubs',value: 5, img: './images/clubs-5.png'},
    {name: '8-clubs',value: 8, img: './images/clubs-8.png'},
    {name: '5-diamonds',value: 5, img: './images/diamonds-5.png'},
    {name: '9-clubs',value: 9, img: './images/clubs-9.png'},
    {name: 'j-hearts',value: 10, img: './images/hearts-J.png'},
    {name: '9-hearts',value: 9, img: './images/hearts-9.png'},
    {name: '8-hearts',value: 8, img: './images/hearts-8.png'},
    {name: '10-diamonds',value: 10, img: './images/diamonds-10.png'},
    {name: 'j-clubs',value: 10, img: './images/clubs-J.png'},
    {name: '8-spades',value: 8, img: './images/spades-8.png'},
    {name: '4-hearts',value: 4, img: './images/hearts-4.png'},
    {name: 'j-diamonds',value: 10, img: './images/diamonds-J.png'},
    {name: 'q-clubs',value: 10, img: './images/clubs-Q.png'},
    {name: 'k-diamonds',value: 10, img: './images/diamonds-K.png'},
    {name: '7-clubs',value: 7, img: './images/clubs-7.png'},
    {name: '9-spades',value: 9, img: './images/spades-9.png'},
    {name: 'as-hearts',value: 11, img:'./images/hearts-A.png'},

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
        } else if (game.sumCardsPlayer(playersHand) > 21) {
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



