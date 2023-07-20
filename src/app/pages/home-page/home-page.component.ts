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
import { AssignmentsByUserService } from 'src/app/services/assignments-by-user.service';
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

  //Agregue esto para poder guardar el h2 editable en el estado del usuario
  @ViewChild('userPersonalStatusElement') userPersonalStatusElement:
    | ElementRef
    | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileLoader: ProfileLoaderService,
    private changeDetectorRef: ChangeDetectorRef,
    private assignmentsService: AssignmentsByUserService,
    private statusChanger: ChangeStatusService
  ) 
  {
    this.storedId = sessionStorage.getItem('userId');
    this.storedData = sessionStorage.getItem('userInfo');

    console.log(this.userInfo);
  }

  ngOnInit(): void {
    if (this.storedId != null) {
      this.userId = parseInt(this.storedId, 10);
    }
    if (this.storedData != null) {
      this.userInfo = JSON.parse(this.storedData);
    }
    if (this.userInfo.avatar == null || this.userInfo.avatar == '') {
      this.imagenURL = this.userInfo.avatar;
      this.imagenURL = '../../../assets/img/asd.png';
    } else {
      this.imagenURL = this.userInfo.avatar;
    }

    this.assignmentsService.getAssignmentsByUser(this.userId).subscribe(
      (responseAssignments) => {
        this.assignments = responseAssignments;
        console.log(this.assignments);
        this.welcomeMessage =
          'You have ' + this.assignments.length + ' tasks to do (' + this.assignments.filter((urgent) => urgent.priority === 4).length + ' urgents!)';
        console.log(this.welcomeMessage);
      },
      (error) => {
        console.error(
          `Ha habido un error al intentar las tareas del usuario ${error}`
        );
      },
      () => console.info('proceso de cargado de tareas a finalizado')
    );
    console.log(this.userInfo);
  }

  changePersonalStatus() {
    this.canChangePersonalStatus = !this.canChangePersonalStatus;
  }

  saveChangePersonalStatus() {
    if (this.userPersonalStatusElement?.nativeElement) {
      this.userInfo.status =
        this.userPersonalStatusElement.nativeElement.innerText;
        sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    }
    this.statusChanger.getAssignmentsByUser(this.userPersonalStatus, this.userId)
    this.canChangePersonalStatus = !this.canChangePersonalStatus;
    this.loading = !this.loading;

  }
}
