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
           
            
            this.pickedCardsDealer = [this.cards[0], this.cards[2]],
            this.pickedCardsPlayer = [this.cards[5], this.cards[8]],
            this.thirdCardDealer = [this.cards[1]],
            this.thirdCardPlayer = [this.cards[6]]
        }; 

        return {cardsDealer:this.pickedCardsDealer, cardsPlayer: this.pickedCardsPlayer, card3Dealer: this.thirdCardDealer, card3Player: this.thirdCardPlayer};     
    };

    checkIf21(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        if (sum === 21) {
            return true;
        }
        return false;
    }

    sumCards(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum;
    }

    
    compareCards(sum1, sum2) {
      
        if (sum1 > sum2 && sum1 <= 21) {
            
            return true;
         
        }
        return false;

    }

    endGame (){
        setTimeout(() => {
            document.location.reload()
        }, 8000);
    }
    
   removeButton (){
       let button = document.querySelectorAll('.btn');
       button.removeEventListener
   }
}