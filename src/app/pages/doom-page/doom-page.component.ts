import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doom-page',
  templateUrl: './doom-page.component.html',
  styleUrls: ['./doom-page.component.scss']
})
export class DoomPageComponent implements OnInit{
  doomFilesReady: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.doomFilesReady = true
    }, 1500)
  }
}
