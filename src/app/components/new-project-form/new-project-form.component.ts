import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { User } from 'src/app/models/user';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent {

  newProjectForm!: FormGroup;
  @Input() errorInNewProject: string = ''
  @Output() newProjectAction: EventEmitter<{}> = new EventEmitter<{}>();
  userInfo!: User;
  storedData: string | null;

  constructor (private formBuilder: FormBuilder){
    this.storedData = sessionStorage.getItem('userInfo');
    if (this.storedData != null) {
      this.userInfo = JSON.parse(this.storedData);
    }
  }

  ngOnInit(): void {
    this.newProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: [this.userInfo.email, Validators.compose([Validators.required, Validators.email])],
    });
  }

  get name (){
    return this.newProjectForm.get('name')
  }
  get description (){
    return this.newProjectForm.get('description')
  }

  submitNewProjectForm(){
    if (this.newProjectForm.valid){
      this.newProjectAction.emit(this.newProjectForm.value)
    }
  }
}
