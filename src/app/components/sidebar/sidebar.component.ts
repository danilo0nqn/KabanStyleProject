import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  token!: string | null;
  showProjectsSidebar: boolean = false;
  isMobile: boolean = false;
  canActivate: boolean = false;

  panelOpenState = false;

  @ViewChild('snav') sidenav!: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile = this.mobileQuery.matches;
    this._mobileQueryListener = () => {
      this.isMobile = this.mobileQuery.matches;
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
      this.authService.setToken(this.token);
      this.canActivate = false;
    }
  }

  desloguearse() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userData');
    this.token = null;
    this.canActivate = false;
    this.changeDetectorRef.detectChanges();
    this.router.navigate(['login']);
  }

  projectsSidebar() {
    this.showProjectsSidebar = !this.showProjectsSidebar;
  }

  closeProjectsSidebar() {
    this.showProjectsSidebar = false;
  }

  ngOnInit(): void {
    this.authService.token$.subscribe((token) => {
      this.token = token;
      if (this.token) {
        this.canActivate = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
