import { Component, OnInit} from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from './shared/models/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Список сотрудников';
  workers: MyWorker[] = [];
  myWorkerType = MyWorkerType;

  constructor(
    private httpWorkerService: HttpWorkerService
  ){}

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.httpWorkerService.getWorkers();
    } catch(err){
      console.error(err);
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);    
  }

  async onDeleteById(id: number) {
    try {
      await this.httpWorkerService.deleteWorker(id);
    } catch (error) {
    } finally {
      this.getData();
    }
  }

  async onAddWorker(event: MyWorker) {
    try {
      await this.httpWorkerService.postWorker(event);
    } catch (error) {
      console.error(error);
    } finally {
      this.getData();
    }
  }

  async onEditById(worker: MyWorker){
    try {
      await this.httpWorkerService.editWorker(worker.id, worker);
    } catch (error) {
      console.error(error);
    } finally {
      this.getData();
    }
  }
}
