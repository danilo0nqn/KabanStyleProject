import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';
import { Assignment } from 'src/app/models/assignment';
import { ChangeStatusService } from 'src/app/services/change-status.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  userInfo!: User;
  userPersonalStatus: string = '';
  canChangePersonalStatus: boolean = false;
  storedId: string | null;
  storedData: string | null;
  userId!: number;
  loading: boolean = true;
  imagenURL!: string;
  assignments!: Assignment[];
  welcomeMessage!: string;
  storedAssignments: string | null;
  editProfile:boolean = false

  @ViewChild('userPersonalStatusElement') userPersonalStatusElement!: ElementRef 

  constructor(
    private route: ActivatedRoute,
    private profileLoader: ProfileLoaderService,
    private changeDetectorRef: ChangeDetectorRef,
    private statusChanger: ChangeStatusService
  ) 
  {
    this.storedId = sessionStorage.getItem('userId');
    this.storedData = sessionStorage.getItem('userInfo');
    this.storedAssignments = sessionStorage.getItem('userAssignments');
  }

  ngOnInit(): void {
    this.storedId = sessionStorage.getItem('userId');
    this.storedData = sessionStorage.getItem('userInfo');
    this.storedAssignments = sessionStorage.getItem('userAssignments');
    if (this.storedId != null) {
      this.userId = parseInt(this.storedId, 10);
    }
    if (this.storedData != null) {
      this.userInfo = JSON.parse(this.storedData);
    }
    if (this.storedAssignments != null) {
      this.assignments = JSON.parse(this.storedAssignments);
      if( this.assignments.length == 0) {
        this.welcomeMessage = 'You have no task assigned to do, you should go to your projects and take a assignment!'
      }else {
        this.welcomeMessage =
        'You have ' + this.assignments.length + ' tasks to do (' + this.assignments.filter((urgent) => urgent.priority === 4).length + ' urgents!)';
      }
    }
    if (this.userInfo.avatar == undefined || this.userInfo.avatar == '' || this.userInfo.avatar == null) {
      this.imagenURL = '../../../assets/img/asd.png';
    } else {
      this.imagenURL = this.userInfo.avatar;
    }
    if(this.userInfo.status.length == 0){
      this.userInfo.status = "Insert your status message here!"
    }
    
  }

  changePersonalStatus() {
    this.canChangePersonalStatus = !this.canChangePersonalStatus;
  }

  saveChangePersonalStatus() {
    if (this.userPersonalStatusElement?.nativeElement) {
      this.userInfo.status = this.userPersonalStatusElement.nativeElement.innerText;
      this.userPersonalStatus = this.userPersonalStatusElement.nativeElement.innerText;
      sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    }
    this.statusChanger.getAssignmentsByUser(this.userPersonalStatus, this.userId).subscribe(
      (response)=> (response),
      (error) => (error),
      ()=> console.info("mensaje de edicion termiando")
    )
    this.canChangePersonalStatus = !this.canChangePersonalStatus;
    this.loading = !this.loading;
  }

  openEditProfilePopup(){
    this.editProfile = true
  }

  closeEditProfilePopup(i: number){
    this.editProfile = false
  }
}