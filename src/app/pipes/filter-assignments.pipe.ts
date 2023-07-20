import { Pipe, PipeTransform } from '@angular/core';
import { Assignment } from '../models/assignment';

@Pipe({
  name: 'filterAssignments'
})
export class FilterAssignmentsPipe implements PipeTransform {

  transform(assignments: Assignment[], projectId: number): Assignment[] {
    return assignments.filter((assignment) => assignment.projectId === projectId);
  }

}
