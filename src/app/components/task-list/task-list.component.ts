import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { Project } from 'src/app/models/project';
import { FilterAssignmentsPipe } from 'src/app/pipes/filter-assignments.pipe'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  userProjects?: Project[];
  storedProjects?: string | null ;
  userAssignments?: Assignment[];
  storedAssignments?: string | null;
  noAssignments: boolean = false

  ngOnInit(): void {
    this.storedProjects = sessionStorage.getItem('userProjects');
    this.storedAssignments = sessionStorage.getItem('userAssignments');
    if (this.storedProjects) {
      this.userProjects = JSON.parse(this.storedProjects);
    }
    if (this.storedAssignments) {
      this.userAssignments = JSON.parse(this.storedAssignments);
    }
    if (this.storedAssignments?.length == 0 && this.storedProjects?.length == 0){
      this.noAssignments = true;
    } else {
      this.noAssignments = false;
    }
  }
}
