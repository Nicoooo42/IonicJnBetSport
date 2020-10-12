import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    username: 'saimon@devdactic.com',
    password: '123'
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        //this.router.navigateByUrl('/members');
      } else {
      }
    });
  }
  

}
