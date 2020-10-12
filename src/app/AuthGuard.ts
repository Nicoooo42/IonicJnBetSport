import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { AuthService } from './services/authService';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private auth: AuthService, private alertCtrl: AlertController) { }
 
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      console.log('test')
    return this.auth.user.pipe(
      take(1),
      map(user => {
          console.log(user)
        if (!user) {
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access that page.',
            buttons: ['OK']
          }).then(alert => alert.present());
 
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
    )
  }
}