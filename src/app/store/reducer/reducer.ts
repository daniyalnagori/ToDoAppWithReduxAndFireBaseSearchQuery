import { NgRedux, select } from 'ng2-redux';

export const initialState = { counter: 0 };
export const reducer = function (state = initialState, action: { type: string }) {
    switch (action.type) {
        case 'increment':
            return Object.assign({}, state, { counter: state.counter + 1 });
        case 'decrement':
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }

} 