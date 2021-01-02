import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/models/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css'],
})
export class EditformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  

  errorRed = false;

  phoneMask = ' (000) 000-00-00';
  customPatterns = { 'R': { pattern: new RegExp('\[а-яА-Яa-zA-Z\]')} }


  editForm: FormGroup;

  @Output() editWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      type: new FormControl(0),
    })
  }

  onEditWorker(first_condition,second_condition,third_condition) {
    if ((first_condition==true)&&(second_condition==true)&&(third_condition==true))
    {
      this.editWorker.emit({
        name: this.editForm.controls['name'].value,
        surname: this.editForm.controls['surname'].value,
        type: this.editForm.controls['type'].value,
        phone_number: this.editForm.controls['phone_number'].value,
      });
      this.errorRed = false;
    }
    else
      this.errorRed = true; 
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.editForm.controls[controlName];
    const result = control.invalid;
    return result;
  }

  getBorderColor(valid){
    if ((valid==false)&&(this.errorRed==true)){
      return {'border-color': 'red'};
    }
    else if ((valid==false)&&(this.errorRed==false)){
      return {'border-color': 'grey'};
    }
    else
    {
      return {'border-color': 'green'};
    }
  }
  
}
