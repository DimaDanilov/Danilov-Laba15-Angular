import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from './shared/models/worker.model';
import { WorkersService } from './shared/services/workers.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(
    private workersService: WorkersService
  ){}

  ngOnInit(): void {
    this.workers = this.workersService.MyWorkersDatabase;
    console.log(this.workers);
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
    console.log(worker);
  }

  onEditById(new_worker){
    let worker_erase = this.workers.find(worker => worker.id === new_worker.id) //найти нужный элемент в массиве
    this.workers.splice(this.workers.indexOf(worker_erase),1); //удалить старый элемент из массива
    this.workers.push(new_worker); //запушить новый
    this.workers.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} ); //отсортировать массив по id
  }

  

}
