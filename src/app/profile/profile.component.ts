import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @Output()isLogout = new EventEmitter()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
 logout(){
   this.firebaseService.logout()
   this.isLogout.emit
 }

}
