import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
//La interface de usuario
import { UserInterface } from '../models/user';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  public isLogged: boolean = false;
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: ''
  };
  public providerId: string = 'null';
  ngOnInit(): void {
    this.getCurrentUser();
    this.authService.isAuth().subscribe((user: any) => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        // this.providerId = user.providerData[0].providerId;
      }
    })
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;

      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }

    })
  }
  onLogout() {
    this.authService.logoutUser();
  }


}
