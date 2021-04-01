import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-songs-app';

  users$ = this.fireStore.collection( path:'home' ).valueChanges();

  constructor(private fireStore: AngularFirestore){
  }
}

