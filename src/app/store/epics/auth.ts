import { Injectable } from "@angular/core";
import { AuthAction } from "../actions/auth";
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs";
import { ActionsObservable } from 'redux-observable'
@Injectable()

export class AuthEpics {
    constructor(private af: AngularFire) {
    }

    register2 = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthAction.register)
            // .do(x => console.log('x', x))
            .switchMap(({ payload }) => {
                this.af.database.list('query-data/users').push({ email: payload.email });
                return this.af.database.list('user')
                    .map((obj) => {
                        if (obj) {
                            console.log('objjjj', obj)
                            return {
                                type: AuthAction.FAIL,
                                payload: obj
                            }
                        } else {
                            return {
                                type: AuthAction.FAIL,
                                payload: obj
                            };
                        }
                    });
            })






    // register = (action$): any => {
    //     return action$.ofType(AuthAction.register)
    //         .switchMap((payload: ActionsObservable<any>) => {
    //             console.log("aaaaa", payload);
    //             // if (payload) {
    //             return this.af.database.list('user/')
    //                 .switchMap((obj) => {
    //                     if (obj[1].payload.email === 'dsad') {
    //                         return Observable.of({
    //                             type: AuthAction.register,
    //                             payload: obj
    //                         })
    //                     }
    //                 })
    //         })
    // }
}














