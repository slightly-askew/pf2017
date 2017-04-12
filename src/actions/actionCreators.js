//@flow
//build new deck
export function newDeck(cards: {}, topCardId: number  = 0) {
  return {
    type: 'NEW_DECK',
    cards,
    topCardId
  }
}

//next card
export function nextCard() {
  return {
    type: 'NEXT_CARD'
  };
}

//previous card
export function previousCard() {
  return {
    type: 'PREVIOUS_CARD'
  }
}

//mark as read
export function markRead(cardId: number) {
  return {
    type: 'MARK_READ',
    cardId
  }
}

//toggle showing read cards
export function toggleReadFilter() {
  return {
    type: 'TOGGLE_READ_FILTER',
  }
}
