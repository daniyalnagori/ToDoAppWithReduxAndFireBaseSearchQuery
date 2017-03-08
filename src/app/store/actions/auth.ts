import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";

@Injectable()

export class AuthAction {
    static register: string = 'register';
    static FAIL: string = 'FAIL';

    constructor(private ngredux: NgRedux<{}>) {

    }
    register2(user) {
        // console.log('userrrr', user)
        this.ngredux.dispatch({ type: AuthAction.register, payload: user });
    }
}