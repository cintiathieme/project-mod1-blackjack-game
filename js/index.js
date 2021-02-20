// 1- iniciar o jogo e embaralhar as cartas,
// 2- 2 cartas para o primeiro jogador e 2 cartas para o segundo jogador,
// 3- virar as cartas do segundo jogador,
// 4- somar os valores das cartas - se algum for igual a 21 o jogo acaba,
// 5- se não acabar, o segundo jogador escolhe se quer mais uma carta,
// 6- se a soma for maior do que 21 o jogo acaba,
// 5- somar o valor das cartas do primeiro jogador e, se for menor/igual a 11, pegar mais uma carta,
// 6 - comparar o valor das cartas e quem tiver a maior soma ganha


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

start.addEventListener('click', function click () {
    start.removeEventListener('click',click);
    
    const game = new Game(cards);

  
    const shuffleCards = game.shuffleCards();

    console.log(shuffleCards)

    
    let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
        <img id="hideCard" class="show" src="./images/baralho.png">
        </div>
        <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
        <img class="show" src="${shuffleCards.cardsDealer[1].img}">
        </div>
        </div>`;

        document.querySelector('#dealer').innerHTML = dealer;

    
    let player = `<div class="card" data-card-name="${shuffleCards.cardsPlayer[0].name}">
    <img class="show" src="${shuffleCards.cardsPlayer[0].img}">
    </div>
    </div>
    <div class="card" data-card-name="${shuffleCards.cardsPlayer[1].name}">
    <img class="show" src="${shuffleCards.cardsPlayer[1].img}">
    </div>
    </div>`;

    document.querySelector('#player').innerHTML = player;

    let playersHand = [shuffleCards.cardsPlayer[0].value, shuffleCards.cardsPlayer[1].value]
    
    let dealersHand = [shuffleCards.cardsDealer[0].value, shuffleCards.cardsDealer[1].value]

    if (game.checkIf21(playersHand)) {
        let win = '<img src="./images/winner.png">'
    
            setTimeout(() => {
    
                document.querySelector('section').innerHTML = win;
            },1000)

            game.endGame();
    }

    if (game.checkIf21(dealersHand)) {

        let lose = '<img src="./images/loser.png">'
        
                setTimeout(() => {
        
                    document.querySelector('section').innerHTML = lose;
                },1000)
    
                game.endGame();
    }

    document.querySelector('.stand').addEventListener('click', () => {
        let hitDisable = `<div class="buttonDisable">Hit</div>`;
        document.querySelector('#hit').innerHTML = hitDisable;

        let standDisable = `<div class="buttonDisable">Stand</div>`;
        document.querySelector('#stand').innerHTML = standDisable;

    let sumPlayer = game.sumCards(playersHand);
    let addPlayersPoints = `<div class="points"> ${sumPlayer}</div>`
        document.querySelector('#playerSum').innerHTML = addPlayersPoints;
     
    let sumDealer = game.sumCards(dealersHand)

    if (sumDealer <= 11) {
        let dealer2 = `<div class="card" data-card-name="${shuffleCards.card3Dealer[0].name}">
        <img class="show" src="${shuffleCards.card3Dealer[0].img}">
        </div>
        </div>`
        document.querySelector('#dealer2').innerHTML = dealer2;

        let card3Dealer = shuffleCards.card3Dealer[0].value;

        dealersHand.push(card3Dealer)
        
        sumDealer += card3Dealer
    }
  
    let addDealersPoints = `<div class="points"> ${sumDealer}</div>`
    document.querySelector('#dealerSum').innerHTML = addDealersPoints;

        
        let compare = game.compareCards(sumPlayer,sumDealer)

        if (!compare) {
            let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
            <img id="hideCard" class="show" src="${shuffleCards.cardsDealer[0].img}">
                
            </div>
            <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
            <img class="show" src="${shuffleCards.cardsDealer[1].img}">
            </div>
            </div>`;
    
            document.querySelector('#dealer').innerHTML = dealer;
    
            let lose = '<img src="./images/loser.png">'
    
            setTimeout(() => {
    
                document.querySelector('section').innerHTML = lose;
            },1000)

            game.endGame();

        } else {
            let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
            <img id="hideCard" class="show" src="${shuffleCards.cardsDealer[0].img}">
                
            </div>
            <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
            <img class="show" src="${shuffleCards.cardsDealer[1].img}">
            </div>
            </div>`;
    
            document.querySelector('#dealer').innerHTML = dealer;

            let win = '<img src="./images/winner.png">'
    
            setTimeout(() => {
    
                document.querySelector('section').innerHTML = win;
            },1000)

            game.endGame();
        }
        
    });

    document.querySelector('.hit').addEventListener('click', () => {
        let hitDisable = `<div class="buttonDisable">Hit</div>`;
        document.querySelector('#hit').innerHTML = hitDisable;

        let standDisable = `<div class="buttonDisable">Stand</div>`;
        document.querySelector('#stand').innerHTML = standDisable;
        
        let player2 = `<div class="card" data-card-name="${shuffleCards.card3Player[0].name}">
        <img class="show" src="${shuffleCards.card3Player[0].img}">
        </div>
        </div>`
    document.querySelector('#player2').innerHTML = player2;

    let card3Player = shuffleCards.card3Player[0].value

    playersHand.push(card3Player)

    let sumPlayer = game.sumCards(playersHand)
        
    let addPlayersPoints = `<div class="points"> ${sumPlayer}</div>`
    document.querySelector('#playerSum').innerHTML = addPlayersPoints;

    let sumDealer = game.sumCards(dealersHand)

    if (sumDealer <= 11) {
        let dealer2 = `<div class="card" data-card-name="${shuffleCards.card3Dealer[0].name}">
        <img class="show" src="${shuffleCards.card3Dealer[0].img}">
        </div>
        </div>`
        document.querySelector('#dealer2').innerHTML = dealer2;

        let card3Dealer = shuffleCards.card3Dealer[0].value;

        dealersHand.push(card3Dealer)
        
        sumDealer += card3Dealer
    }
    
    let addDealersPoints = `<div class="points"> ${sumDealer}</div>`
    document.querySelector('#dealerSum').innerHTML = addDealersPoints;

    let compare = game.compareCards(sumPlayer,sumDealer)


    if (!compare) {
        let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
        <img id="hideCard" class="show" src="${shuffleCards.cardsDealer[0].img}">
            
        </div>
        <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
        <img class="show" src="${shuffleCards.cardsDealer[1].img}">
        </div>
        </div>`;

        document.querySelector('#dealer').innerHTML = dealer;

        let lose = '<img src="./images/loser.png">'

        setTimeout(() => {

            document.querySelector('section').innerHTML = lose;
        },1000)
        game.endGame();

    } else {
        let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
            <img id="hideCard" class="show" src="${shuffleCards.cardsDealer[0].img}">
                
            </div>
            <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
            <img class="show" src="${shuffleCards.cardsDealer[1].img}">
            </div>
            </div>`;
    
            document.querySelector('#dealer').innerHTML = dealer;
        let win = '<img src="./images/winner.png">'

        setTimeout(() => {

            document.querySelector('section').innerHTML = win;
        },1000)
        
        game.endGame();
    }
    
      
    })    
    
})



