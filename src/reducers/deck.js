//@flow

export default function (state = [], action) {
    switch(action.type) {
        case 'NEW_DECK':
            let newDeck = action.topCardId > 0 ? [action.topCardId] : [];
            const isNotTopCard = (card) => card.id !== action.topCardId;
            return newDeck.concat(action.cards.filter(isNotTopCard).map((card) => card.id));
        case 'NEXT_CARD':
            return [...state.slice(1)];
        default:
            return state;
    }
};
