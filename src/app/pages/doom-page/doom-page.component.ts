import { Component, OnInit } from '@angular/core';
import {*} from 'src/assets/doom-game'

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
    }, 3000)


}
