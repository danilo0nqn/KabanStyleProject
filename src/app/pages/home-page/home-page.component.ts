import { Component, OnInit } from '@angular/core';
import {
  IRandomContact,
  SingleResult,
} from 'src/app/models/randomuser.interface';
import { RandomProfileService } from 'src/app/services/random-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  userData!: IRandomContact;
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
  }

  getAvatar() {
    console.log(this.userData.avatar);
  }
}
