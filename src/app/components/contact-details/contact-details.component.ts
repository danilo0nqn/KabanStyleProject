import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms'
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit{

  @Output() closePopup: EventEmitter<number> = new EventEmitter<number>();
  @Input() contactId!:number
  @Input() indexInTasks!: number
  contactInfoForm!: FormGroup
  isEditable: boolean = false;
  contactInfo!: User
  contactProjects!: Project[];
  sameUser: boolean = false
  userId!: number

  constructor(private formBuilder: FormBuilder, private profileLoaderService: ProfileLoaderService, private editProfileService: EditProfileService){
    
  }

  ngOnInit(): void {
    this.profileLoaderService.getUserInfo(this.contactId).subscribe(
      (response)=> {this.contactInfo = response},
      (error) => { console.error(`No se pudo cargar la info del usuario ${error}`)},
      ()=>{
        console.info('Proceso de carga de usuario finalizada');
        this.contactInfoForm = this.formBuilder.group({
          name: [this.contactInfo.name, Validators.required],
          lastName: [this.contactInfo.lastName, Validators.required],
          password: [this.contactInfo.password, Validators.required],
          status: [this.contactInfo.status, Validators.required],
          linkedIn: this.contactInfo.linkedIn,
          gitHub: this.contactInfo.gitHub,
          avatar: this.contactInfo.avatar,
        });
      }
    )
    this.profileLoaderService.getProjects(this.contactId).subscribe(
      (responseProjects)=>{this.contactProjects = responseProjects}
    )
    let storedId = sessionStorage.getItem('userId');
    if (storedId){
      this.userId = parseInt(storedId, 10)
    }
    if (this.userId == this.contactId){
      this.sameUser = true
    }
  }

  get name (){
    return this.contactInfoForm.get('name')
  }
  get lastName (){
    return this.contactInfoForm.get('lastName')
  }
  get password (){
    return this.contactInfoForm.get('password')
  }
  get status (){
    return this.contactInfoForm.get('status')
  }
  submitNewProjectForm(){
    if (this.contactInfoForm.valid){
      let data = this.contactInfoForm.value
      data.id = this.contactId
      if (!data.gitHub){
        data.gitHub = ''
      }
      if (!data.linkedIn){
        data.linkedIn = ''
      }
      this.editProfileService.editUserProfile(data).subscribe(
        (response)=>{this.profileLoaderService.loadUserInfo(this.userId)},
        (error) => {console.error(`Ha habido un error al intentar cargar el usuario ${error}`);},
        ()=> {console.info('proceso de cargado de usuario a finalizado');}
      )
      this.saveProfile()
    }
  }

  changeIsEditable(){
    this.isEditable = true
  }

  saveProfile(){
    this.isEditable = false
  }

  onCloseButtonClick(): void {
    this.closePopup.emit(this.indexInTasks);
  }
}
