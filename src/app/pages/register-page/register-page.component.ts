import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterNewUserService } from 'src/app/services/register-new-user.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent{

  errorRegister: string = '';

  constructor(private registerNewUserService: RegisterNewUserService, private router : Router){}

  registerUser(value: any){
    /* let { name, lastName, email, password, linkedIn, gitHub, avatar } = value */
    this.registerNewUserService.register(value).subscribe(
      (response) => {
        console.log("Usuario creado correctamente")
        this.router.navigate(['login']);
      },
      (error) => {
        console.error(`Ha habido un error al intentar crear el usuario ${error}`);
      },
      () => console.info('proceso de registracion finalizado')
      );
    }
}


