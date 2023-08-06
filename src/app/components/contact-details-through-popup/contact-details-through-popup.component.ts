import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { ContactPopupService } from 'src/app/services/contact-popup.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms'
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: 'app-contact-details-through-popup',
  templateUrl: './contact-details-through-popup.component.html',
  styleUrls: ['./contact-details-through-popup.component.scss']
})
export class ContactDetailsThroughPopupComponent {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() contactId!:number;
  ownerOpen:boolean = false;
  contactInfoForm!: FormGroup
  isEditable: boolean = false;
  contactInfo!: User
  contactProjects!: Project[];
  sameUser: boolean = false
  userId!: number

  constructor(
    private contactPopupService: ContactPopupService,
    private formBuilder: FormBuilder,
    private profileLoaderService: ProfileLoaderService,
    private editProfileService: EditProfileService
  ) {}

  
  ngOnInit(): void {
    let storedId = sessionStorage.getItem('userId');
    if (storedId){
      this.userId = parseInt(storedId, 10)
    }
    if (this.userId == this.contactId){
      this.sameUser = true;
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
            linkedInURL: this.contactInfo.linkedInURL,
            gitHubURL: this.contactInfo.gitHubURL,
            avatar: this.contactInfo.avatar,
          });
        }
      )
    }else{
      this.profileLoaderService.getUserInfo(this.contactId).subscribe(
        (response)=> {
          this.contactInfo = response;
          this.contactInfo.password = '';
        },
        (error) => { console.error(`No se pudo cargar la info del usuario ${error}`)},
        ()=>{
          console.info('Proceso de carga de usuario finalizada');
          this.contactInfoForm = this.formBuilder.group({
            name: [this.contactInfo.name, Validators.required],
            lastName: [this.contactInfo.lastName, Validators.required],
            password: ['', Validators.required],
            status: [this.contactInfo.status, Validators.required],
            linkedInURL: this.contactInfo.linkedInURL,
            gitHubURL: this.contactInfo.gitHubURL,
            avatar: this.contactInfo.avatar,
          });
        }
      )
    }
    this.profileLoaderService.getProjects(this.contactId).subscribe(
      (responseProjects)=>{this.contactProjects = responseProjects}
    )
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
    if (this.contactInfoForm.valid && this.userId == this.contactId){
      let data = this.contactInfoForm.value
      data.id = this.contactId
      if (!data.gitHubURL){
        data.gitHubURL = ''
      }
      if (!data.linkedInURL){
        data.linkedInURL = ''
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
  

  closeAssignmentPopup(): void {
    this.closePopup.emit();
    this.ownerOpen = true;
    this.contactPopupService.setOpenButtonShowStatus(this.ownerOpen);
    console.log(this.ownerOpen + " En el componente assignment pero en el method close assigmnet popup")
  }

}
