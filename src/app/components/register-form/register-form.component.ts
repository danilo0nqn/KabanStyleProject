import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm!: FormGroup;
  @Input() errorInRegister: string = ''
  @Output() registerAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor (private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      linkedIn: [''],
      gitHub: [''],
      avatar: ['']
    });

  }

  get name (){
    return this.registerForm.get('name')
  }
  get lastName (){
    return this.registerForm.get('lastName')
  }
  get email (){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

  submitLogin(){
    console.log('en submit pero no submiteado')
    if (this.registerForm.valid){
      console.log('Register submiteado')
      this.registerAction.emit(this.registerForm.value)
    }
  }
}
