import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { AuthAction } from '../store/actions/auth'
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @select(['users']) state$: Observable<any>;
  myForm: FormGroup;

  lists: any = [];
  constructor(fb: FormBuilder, private af: AngularFire, private aa: AuthAction, ngredux: NgRedux<{}>) {
    this.myForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
    this.state$.subscribe((x) => {
      x.map((y) => {
      })
    });
  }
  keys(object: any) {
    return object ? Object.keys(object) : []
  }
  search(e) {
    if (!e.target.value) {
      this.getData()
      return;
    }
    this.lists = [];
    let ref = firebase.database().ref('query-data');
    let userRef = ref.child('users')
      .orderByChild('email')
      .startAt(e.target.value)
      .endAt(`${e.target.value}\uf8ff`)
      .on("child_added", ((snapshot) => {
        this.lists[snapshot.key] = snapshot.val().email;
      }));
  }
  onSubmit(value) {
    this.myForm.reset();
    this.lists = [];
    this.aa.register2(value);
  }
  ngOnInit() {
    this.getData()
  }
  getData() {
    this.lists = []
    this.af.database.list('query-data/users').subscribe((x) => {
      x.map((y) => { this.lists.push(y.email) });
    })
  }
}
