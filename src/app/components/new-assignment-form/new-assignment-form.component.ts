import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactPopupService } from 'src/app/services/contact-popup.service';
import { NewAssignmentService } from 'src/app/services/new-assignment.service';

@Component({
  selector: 'app-new-assignment-form',
  templateUrl: './new-assignment-form.component.html',
  styleUrls: ['./new-assignment-form.component.scss']
})
export class NewAssignmentFormComponent {
  newAssignmentForm!: FormGroup;
  errorInNewAssignment?: string = ''
  @Output() reloadAssignmentsAndClosePopup: EventEmitter<void> = new EventEmitter<void>();
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>()
  @Input() projectId!: number;
  userId!: number;
  storedId: string | null;
  showPriorityList: boolean = false

  constructor (private formBuilder: FormBuilder, private newAssignmentService: NewAssignmentService){
    this.storedId = sessionStorage.getItem('userId');
    if (this.storedId != null) {
      this.userId = JSON.parse(this.storedId);
    }
  }

  ngOnInit(): void {
    this.newAssignmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      priority: [0 , Validators.required],
      stage: 0,
      descriptionURL: '',
      designURL: '',
    });
  }

  get name (){
    return this.newAssignmentForm.get('name')
  }
  get description (){
    return this.newAssignmentForm.get('description')
  }
  get priority (){
    return this.newAssignmentForm.get('priority')
  }

  submitNewAssignmentForm(){
    if (this.newAssignmentForm.valid){
      let newAssignmentData = this.newAssignmentForm.value
      newAssignmentData.projectId = this.projectId
      newAssignmentData.userId = this.userId
      this.newAssignmentService.newAssignment(newAssignmentData).subscribe(
        (response) => {},
        (error) => {console.log(`Ha habido un error al crear un nuevo assignment ${error}`)},
        ()=> {this.reloadAssignmentsAndClosePopup.emit()}
      )
    }
  }
  closeNewAssignmentPopup(){
    this.closePopup.emit()
  }
  changeShowPriorityList(){
    this.showPriorityList = !this.showPriorityList
  }

}
