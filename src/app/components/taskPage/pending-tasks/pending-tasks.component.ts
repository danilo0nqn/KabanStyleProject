import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss']
})
export class PendingTasksComponent implements OnChanges{
  /* TODO: Cuadno cargo una tarea, guardar el ID del owner para la ventana popup */
  @Input() pendingAssignments!: Assignment[]

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
