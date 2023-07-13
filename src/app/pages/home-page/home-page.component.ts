import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IRandomContact , SingleResult } from 'src/app/models/randomuser.interface';
import { RandomProfileService } from 'src/app/services/random-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  userData!: IRandomContact;
  userPersonalStatus: string = ''
  canChangePersonalStatus:boolean = false

  //Agregue esto para poder guardar el h2 editable en el estado del usuario
  @ViewChild('userPersonalStatusElement') userPersonalStatusElement: ElementRef | undefined;

  constructor(
    private randomProfile: RandomProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userData = this.randomProfile.getUserData();
    console.log(sessionStorage.getItem('userData'));
    this.route.data.subscribe((data) => {
      const randomContact: SingleResult = data['randomContact'];
    });
    this.userPersonalStatus = `Hi! This is ${this.userData.first_name}! Currently working so you can message me throug LinkedIn!`
  }

  changePersonalStatus(){
    this.canChangePersonalStatus = !this.canChangePersonalStatus
  }

  saveChangePersonalStatus(){
    if (this.userPersonalStatusElement?.nativeElement) {
      this.userPersonalStatus = this.userPersonalStatusElement.nativeElement.innerText;
    }
    this.canChangePersonalStatus = !this.canChangePersonalStatus
  }

}
