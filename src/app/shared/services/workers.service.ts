import { Injectable } from '@angular/core';
import { MyWorker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  MyWorkersDatabase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', type: 0 , phone_number: "+7 (916) 888-55-22"},
    { id: 2, name: 'Петр', surname: 'Петров', type: 1 , phone_number: "+7 (914) 345-54-22"},
    { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2 , phone_number: "+7 (916) 964-42-11"},
    { id: 4, name: 'Василий', surname: 'Васильев', type: 3 , phone_number: "+7 (916) 123-45-59"},
  ];

}
