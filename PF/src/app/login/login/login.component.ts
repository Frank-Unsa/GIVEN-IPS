import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

// logearse con firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";
import "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth:AngularFireAuth, private router:Router, private authService:AuthService, private storage:AngularFireStorage) { } //private authService: SocialAuthService
 
  ngOnInit(): void {
  }
  
  onLoginGoogle():void{
    this.authService.loginGoogleUser()
    .then((res)=>{
      console.log('resUser',res);
      this.onLoginRedirect();
    }).catch(err => console.log('err',err));
    //this.router.navigate(['inicio']);
  }
  onLoginFacebook(){
    this.authService.loginFacebookUser()
    .then((res)=>{
      console.log('resUser',res);
      this.onLoginRedirect();
    }).catch(err => console.log('err',err));
  }
  onLogout(){
    this.authService.logoutUser();
  }
  onLoginRedirect():void {
    this.router.navigate(['inicio']);
  }
}