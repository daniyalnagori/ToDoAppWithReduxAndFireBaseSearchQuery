import { AuthAction } from "../actions/auth";
import { AuthEpics } from '../epics/auth';
// interface ilocal {
//     email: string,
//     password: any,
// }
// interface initialState {
//     user: ilocal;
// }
// export const authinitialState = { user: {} };
// export const regiserReducer = function (state = authinitialState, action: { type: string, payload?: any }) {
//     switch (action.type) {
//         case AuthAction.register:
//             console.log("reducerssssssss", action.payload);
//             return Object.assign({}, state, { user: action.payload });
//         default:
//             return state;
//     }

// } 





interface emailnpass {
    email: string,
    password: number,
}

export const authinitialState = {
    users: [],
};

interface IAction {
    type: string,
    payload?: any
}

export function regiserReducer(state = authinitialState, action: IAction) {
    let newState = null;
    switch (action.type) {
        case AuthAction.FAIL:
            // newState = action.payload.email;
            // newState.push(action.payload.email);
            // console.log("aaaaaaaaaaaaaaaaaaaaaaa", Object.assign({}, state, { users: action.payload }))
            // console.log("cccccccccccc", newState)
            return Object.assign({}, state, { users: action.payload });
        default:
            return state;
    }
}