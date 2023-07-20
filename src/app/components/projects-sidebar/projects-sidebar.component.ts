
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnChanges, OnDestroy, SimpleChanges, OnInit} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.scss']
})
export class ProjectsSidebarComponent implements OnDestroy, OnInit{

  userProjects?: Project[];
  storedProjects?: string | null ;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.storedProjects = sessionStorage.getItem('userProjects')
    if (this.storedProjects) {
      this.userProjects = JSON.parse(this.storedProjects);
      console.log(this.userProjects)
    }
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
