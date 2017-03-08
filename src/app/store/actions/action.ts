import { select, NgRedux } from "ng2-redux";
import { Injectable } from "@angular/core";

@Injectable()

export class Action {
    static increment: string = 'increment';
    static decrement: string = 'decrement';
    constructor(private ngredux: NgRedux<{}>) {

    }
    increment() {
        this.ngredux.dispatch({ type: Action.increment });
    }
    decrement() {
        this.ngredux.dispatch({ type: Action.decrement });
    }
}