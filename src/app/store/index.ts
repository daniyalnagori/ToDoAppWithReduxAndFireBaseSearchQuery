import { NgModule } from "@angular/core"
import { NgRedux, select, DevToolsExtension } from "ng2-redux";
import { reducer } from './reducer/reducer';
import { authinitialState, regiserReducer } from './reducer/authreducer';
import { Action } from './actions/action'
export { Action } from './actions/action'
import { AuthAction } from './actions/auth';
export { AuthAction } from './actions/auth';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AuthEpics } from './epics/auth';
interface AppReducer {
    reducer?: Object;
    authreducer?: Object;
}
const AppReducer = combineReducers<any>({
    auth: regiserReducer,
    reducer: reducer,
})
@NgModule({
    providers: [Action, AuthAction, AuthEpics],
})
export class AppStore {
    constructor(private ngredux: NgRedux<{}>, private dev: DevToolsExtension, private te: AuthEpics) {
        const middleware = [createEpicMiddleware(this.te.register2)]
        // this.ngredux.configureStore(reducer, initialState, null);
        this.ngredux.configureStore(regiserReducer, authinitialState, middleware, dev.isEnabled() ? dev.enhancer() : f => f);
    }
}