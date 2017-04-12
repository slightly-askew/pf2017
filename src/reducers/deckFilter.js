// @flow

export default function (state = false, action) {
    switch (action.type) {
        case 'TOGGLE_READ_FILTER':
            return !state;
        default:
            return state;
    }
};
