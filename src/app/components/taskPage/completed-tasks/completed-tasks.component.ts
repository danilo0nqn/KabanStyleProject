import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
  /* TODO: Cuadno cargo una tarea, guardar el ID del owner para la ventana popup */
  @Input() completedAssignments!: Assignment[]
}
