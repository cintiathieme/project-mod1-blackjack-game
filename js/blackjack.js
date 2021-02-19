class Game {
    constructor(cards){
        this.cards = cards;
        this.pickedCardsDealer = [];
        this.pickedCardsPlayer = []; 
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
           
            
            this.pickedCardsDealer = [this.cards[0], this.cards[2]],
            this.pickedCardsPlayer = [this.cards[5], this.cards[8]]
        }; 

        return {cardsDealer:this.pickedCardsDealer, cardsPlayer: this.pickedCardsPlayer};     
    };

    checkIf21() {
        if (card1 + card2 === 21) {

        }

        if (card3 + card4 === 21) {

        }
    }

    
}