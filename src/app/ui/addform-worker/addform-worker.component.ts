import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/models/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})

export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  
  errorRed = false;


  phoneMask = ' (000) 000-00-00';
  customPatterns = { 'R': { pattern: new RegExp('\[а-яА-Яa-zA-Z\]')} }


  addForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      type: new FormControl(0),
    })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.addForm.controls[controlName];
    const result = control.invalid;
    return result;
  }

  onAddWorker(first_condition,second_condition,third_condition) {
    if ((first_condition==true)&&(second_condition==true)&&(third_condition==true))
    {
      this.addWorker.emit({
        name: this.addForm.controls['name'].value,
        surname: this.addForm.controls['surname'].value,
        type: this.addForm.controls['type'].value,
        phone_number: this.addForm.controls['phone_number'].value,
      });
      this.errorRed = false;
    }
    else
      this.errorRed = true; 
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



