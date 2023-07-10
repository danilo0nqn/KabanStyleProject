import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor (private router: Router, private authService: AuthService){}


  ngOnInit(): void {
    
    let token = sessionStorage.getItem('token')

    if (token) {
      this.router.navigate(['home']);
    }

  }

  loginUser(value: any){

    let {email, password} = value;

    this.authService.login(email, password).subscribe (
      (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['home'])
      },
      (error) => console.error(`Ha habido un error al intentar loguearse ${error}`),
      () => console.info('proceso de login finalizado')
    )

  }

}
