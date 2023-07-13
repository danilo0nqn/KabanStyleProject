import { Injectable } from '@angular/core';
import {
  IRandomContact,
  Results,
  SingleResult,
} from '../models/randomuser.interface';

@Injectable({
  providedIn: 'root',
})
export class RandomProfileService {
  private userData!: IRandomContact;

  constructor() {
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }

  setUserData(results: SingleResult) {
    this.userData = results.data;
    sessionStorage.setItem('userData', JSON.stringify(results.data));
  }

  getUserData(): IRandomContact {
    return this.userData;
  }
}
