import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  loginForm! : FormGroup
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor (private formBuilder: FormBuilder){}

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

  }

  get email (){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitLogin(){
    console.log('en submit pero no submiteado')
    if (this.loginForm.valid){
      console.log('submiteado')
      this.loginAction.emit(this.loginForm.value)
    }
  }

}
