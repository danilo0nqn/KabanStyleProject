import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-for-review-tasks',
  templateUrl: './for-review-tasks.component.html',
  styleUrls: ['./for-review-tasks.component.scss']
})
export class ForReviewTasksComponent {
  /* TODO: Cuadno cargo una tarea, guardar el ID del owner para la ventana popup */
  @Input() forReviewAssignments!: Assignment[]
}
