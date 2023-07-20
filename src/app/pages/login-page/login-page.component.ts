import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  errorLogin: string = '';
  userId!: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileLoader: ProfileLoaderService,
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
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.id)
        this.userId = response.id;
        this.authService.setToken(response.token);
        this.errorLogin = '';

        this.profileLoader.getUserInfo(this.userId).subscribe(
          (responseProfile) => {
            sessionStorage.setItem('userInfo', JSON.stringify(responseProfile))
          },
          (error) =>{
            console.error(`Ha habido un error al intentar cargar el usuario ${error}`);
            sessionStorage.removeItem('token')
          },
          () => console.info('proceso de cargado de usuario a finalizado')
        );
        this.profileLoader.loadProjectsAssignments(this.userId);
        this.router.navigate(['home']);
      },
      (error) => {
        this.errorLogin = `${error}`
        console.error(`Ha habido un error al intentar loguearse ${error}`)
      },
      () => console.info('proceso de login finalizado')
    );
  }
}
