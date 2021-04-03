import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'node:events';
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
