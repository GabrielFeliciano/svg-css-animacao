class Cards {
    constructor () {
        this.cardsContainer = document.querySelector("#section-dicas");
        this.allCards = document
            .querySelector("#section-dicas")
            .children
            || [];
        this.minProximity = window.innerHeight;
    }

    CalcScroll () {
        const self = this;

        const pos = document
            .getElementById('section-dicas')
            .getBoundingClientRect()
            .y;

        console.log(pos);

        function calcPosRight () {
            return (pos - self.cardsContainer.clientHeight > 0) ? pos - self.cardsContainer.clientHeight : 0
        }

        for (let card of this.allCards) {
            let cardCssClasses = [...card.classList];

            if (pos < this.minProximity) {
                const calculedPosForRightCards = calcPosRight()
                if (cardCssClasses.some(className => (className === 'card-dir') ? true : false)) {
                    card
                        .style
                        .transform = `translate(${calculedPosForRightCards}px, 0)`;
                } else if (cardCssClasses.some(className => (className === 'card-esq') ? true : false)) {
                    card
                        .style
                        .transform = `translate(${-calculedPosForRightCards}px, 0)`;
                } else {
                    console.error("Undefined Card");
                }
            } else {
                card
                    .style
                    .transform = `translate(0, 0)`;
            }
        }
    }
}

export { Cards }