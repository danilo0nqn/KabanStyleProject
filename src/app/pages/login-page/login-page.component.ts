import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';
import { RandomProfileService } from 'src/app/services/random-profile.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  errorLogin: string = ''

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileLoader: ProfileLoaderService,
    private randomProfile: RandomProfileService
  ) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if (token) {
      this.router.navigate(['home']);
    }
  }

  loginUser(value: any) {
    let { email, password } = value;

    this.authService.login(email, password).subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.token);
        this.authService.setToken(response.token);
        this.errorLogin = '';

        /* TODO: Cambiar a cargar valores reales */
        /* Realizar llamado con un id verdadero, o email verdadero haciendo un query filtrado */

        this.profileLoader.getRandomContact(3).subscribe(
          (responseProfile) => {
            console.log(responseProfile);
            this.randomProfile.setUserData(responseProfile);
          },
          (error) =>console.error(`Ha habido un error al intentar cargar el contacto falso de reqres ${error}`),
          () => console.info('proceso de cargado de contacto falso de reqres')
        );
        
        this.router.navigate(['home']);
      },
      (error) => {
        this.errorLogin = 'User Not Found.'
        console.error(`Ha habido un error al intentar loguearse ${error}`)
      },
      () => console.info('proceso de login finalizado')
    );
  }
}
