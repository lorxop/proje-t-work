import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isSignedIn=false
  constructor(public firebaseService: FirebaseService){}
    ngOnInit(){
    if(localStorage.getItem('user')!== null)
     this.isSignedIn= true
     else
     this.isSignedIn= false
    }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn= true
  }
  handleLogout(){
    this.isSignedIn=false
  }
}
