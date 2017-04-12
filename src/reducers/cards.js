//@flow

export default function (state: Array<Object> = [], action: {type: any, cardId: number}) {
    switch (action.type) {
        case 'MARK_READ': {
            const i = state.findIndex((val) => val.id === action.cardId);
            if (i) {
                return [
                    ...state.slice(0, i),
                    { ...state[i], isRead: true },
                    ...state.slice(i + 1),
                ]
            } else {
                throw new Error(`Could not determine the index for cardId: ${action.cardId} in order to complete action: ${action.type}`);
            }
        }
        case 'TOGGLE_UNREAD': {
            const i = state.findIndex((val) => val.id === action.cardId);
            if (i) {
                return [
                    ...state.slice(0, i),
                    { ...state[i], isRead: () => !state[i].isRead},
                    ...state.slice(i + 1),
                ]
            } else {
                throw new Error(`Could not determine the index for cardId: ${action.cardId} in order to complete action: ${action.type}`);
            }
        }
        default:
            return state;
    }
};
