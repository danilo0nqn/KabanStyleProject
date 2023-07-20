import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects-expansion-panel',
  templateUrl: './projects-expansion-panel.component.html',
  styleUrls: ['./projects-expansion-panel.component.scss']
})
export class ProjectsExpansionPanelComponent implements OnInit{

  userProjects?: Project[];
  storedProjects?: string | null ;
  panelOpenState: boolean = false;

  ngOnInit(): void {
    this.storedProjects = sessionStorage.getItem('userProjects')
    if (this.storedProjects) {
      this.userProjects = JSON.parse(this.storedProjects);
      console.log(this.userProjects)
    }
  }

}
