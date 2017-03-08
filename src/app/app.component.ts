import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, NgRedux } from 'ng2-redux';
import { Action } from './store/actions/action';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Counter App!';
  // @select(['users']) state$: Observable<{}>
  constructor(private ngredux: NgRedux<{}>, private a: Action) { //injecting actions
  }
  increment() {
    this.a.increment();
  }
  decrement() {
    this.a.decrement();
  }


}