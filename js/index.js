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


document.querySelector('#baralho').addEventListener('click', () => {
    const game = new Game(cards);

  
    const shuffleCards = game.shuffleCards();

    let dealer = `<div class="card" data-card-name="${shuffleCards.cardsDealer[0].name}">
         <div class="back" name="${shuffleCards.cardsDealer[0].img}"></div>
         <div class="front" style="background: url(${shuffleCards.cardsDealer[0].img}) no-repeat"></div>
        </div>
        <div class="card" data-card-name="${shuffleCards.cardsDealer[1].name}">
        <div class="back" name="${shuffleCards.cardsDealer[1].img}"></div>
        <div class="front" style="background: url(${shuffleCards.cardsDealer[1].img}) no-repeat"></div>
        </div>`;

        document.querySelector('#dealer').innerHTML = dealer;

    
    let player = `<div class="card" data-card-name="${shuffleCards.cardsPlayer[0].name}">
    <div class="back" name="${shuffleCards.cardsPlayer[0].img}"></div>
    <div class="front" style="background: url(${shuffleCards.cardsPlayer[0].img}) no-repeat"></div>
    </div>
    <div class="card" data-card-name="${shuffleCards.cardsPlayer[1].name}">
    <div class="back" name="${shuffleCards.cardsPlayer[1].img}"></div>
    <div class="front" style="background: url(${shuffleCards.cardsPlayer[1].img}) no-repeat"></div>
    </div>`;

    document.querySelector('#player').innerHTML = player;

    let selectedCards = [shuffleCards.cardsPlayer[0].value, shuffleCards.cardsPlayer[1].value, shuffleCards.cardsDealer[0].value, shuffleCards.cardsDealer[0].value]

    console.log(selectedCards)

    game.checkIf21()
    

})


