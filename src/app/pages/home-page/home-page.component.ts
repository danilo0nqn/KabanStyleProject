import { Component, OnInit } from '@angular/core';
import { IRandomContact } from 'src/app/models/randomuser.interface';
import { RandomProfileService } from 'src/app/services/random-profile.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  userData!: IRandomContact;
  constructor(private randomProfile: RandomProfileService) {}

  ngOnInit(): void {
    this.userData = this.randomProfile.getUserData();
    console.log(sessionStorage.getItem('userData'));
  }

  getAvatar() {
    console.log(this.userData.avatar);
  }
}
