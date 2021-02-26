class Game {
    constructor(cards, array){
        this.cards = cards;
        this.pickedCardsDealer = [];
        this.pickedCardsPlayer = []; 
        this.array = [];
    }

    shuffleCards() {
        const min = 0;
        const max = this.cards.length;
        let randomNumber; 
        
        for (let i = 0; i < this.cards.length; i++) {
            randomNumber = Math.floor(Math.random() * (max - min)) + min;
            
            const selectedCard = this.cards[randomNumber];

            this.cards.splice(randomNumber, 1);
            this.cards.push(selectedCard);
           
            
            this.pickedCardsDealer = [this.cards[2], this.cards[3]],
            this.pickedCardsPlayer = [this.cards[0], this.cards[1]],

            
        document.querySelector('#dealerHideCard').innerHTML =`<div class="card" data-card-name="${this.pickedCardsDealer[1].name}">
        <img id="hideCard" class="show" src="./images/baralho.png">
        </div>`    

        document.querySelector('#dealer').innerHTML = `<div class="card" data-card-name="${this.pickedCardsDealer[0].name}">
        <img class="show" src="${this.pickedCardsDealer[0].img}">
        </div>
        </div>`;

           
        document.querySelector('#player').innerHTML = `<div class="card" data-card-name="${this.pickedCardsPlayer[0].name}">
        <img class="show" src="${this.pickedCardsPlayer[0].img}">
        </div>
        </div>
        <div class="card" data-card-name="${this.pickedCardsPlayer[1].name}">
        <img class="show" src="${this.pickedCardsPlayer[1].img}">
        </div>
        </div>`;

        }
        this.cards.splice(0,4)
            
        
        return {cardsDealer: this.pickedCardsDealer, cardsPlayer: this.pickedCardsPlayer};     
    };

    sumCardsPlayer(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        document.querySelector('#playerSum').innerHTML = `<div class="points"> ${sum}</div>`
        return sum;
    }

    checkIf21(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        if (sum === 21) {
            let hitDisable = `<div class="buttonDisable">Hit</div>`;
        document.querySelector('#hit').innerHTML = hitDisable;

        let standDisable = `<div class="buttonDisable">Stand</div>`;
        document.querySelector('#stand').innerHTML = standDisable;
            return true;
        }
        return false;
    }

    winner() {
        setTimeout(() => {
            document.querySelector('section').innerHTML = '<img class="winner" src="./images/winner.png">';
        },3000)
    }
    
    loser() {
        setTimeout(() => {        
            document.querySelector('section').innerHTML = '<img class="loser" src="./images/loser.png">';
        },3000)
    }
    
    addCardPlayer(){
        let addPlayer = this.cards[0];

        this.pickedCardsPlayer.unshift(addPlayer);
        

        let newCardPlayer = `<div class="card" data-card-name="${this.pickedCardsPlayer[0].name}">
        <img class="show" src="${this.pickedCardsPlayer[0].img}">
        </div>
        </div>`
        document.querySelector('#player').insertAdjacentHTML(`afterend`, newCardPlayer);

        this.cards.splice(0,1);

        return addPlayer;
    }

    addCardDealer(number){
        
            let addDealer = this.cards[0];
    
            this.pickedCardsDealer.unshift(addDealer);
    
            let newCardDealer = `<div class="card" data-card-name="${this.pickedCardsDealer[0].name}">
            <img class="show" src="${this.pickedCardsDealer[0].img}">
               </div>
               </div>`
                 
            this.cards.splice(0,1)

            document.querySelector('#dealer').insertAdjacentHTML(`afterend`, newCardDealer);

            return addDealer;
    }

    sumCardsDealer(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        
        return sum;
    }

    endGame (){
        setTimeout(() => {
            document.location.reload()
        }, 5000);
    }
    
   
}