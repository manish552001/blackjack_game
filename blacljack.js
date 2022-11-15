let firstcard = randomNum();
        let secondcard = randomNum();
        let array_card = [firstcard, secondcard];
        let sum = firstcard + secondcard;
        let massage = ""
        let card_el = document.getElementById("card");

        function randomNum() {
            let randomcard = Math.floor(Math.random() * 13 + 1);
            if (randomcard == 1) {
                return 11;
            }
            else if (randomcard > 11) {
                return 10;
            }
            else
                return randomcard;
        }
        function startgame() {
            card_el.textContent = "Cards: ";
            for (let i = 0; i < array_card.length; i++) {
                card_el.textContent += array_card[i] + " ";

            }
            document.getElementById("sum").textContent = "Sum: " + sum;
            if (sum <= 20) {
                massage = "Do you want to draw a new card? ";

            }
            else if (sum === 21) {
                massage = "You've got Blackjack ";

            }
            else {
                massage = "You have out of the game ";
            }
            document.getElementById("massage").textContent = massage;
        }

        function newcard() {
            let card = randomNum();
            sum += card;
            array_card.push(card)
            startgame();
        }