import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/models/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {

  editId: number;

  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<number>();

  display=[];
 
  constructor() {}

  ngOnInit(): void {}

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEditWorker(worker: any){
    worker.id = this.editId;
    this.editWorker.emit(worker);
    this.display[worker.id]=false;
  }

  onPress(id) {
    this.editId = id;
    if (!this.display[id])
      this.display[id] = true;
    else
    this.display[id] = false;
  }

}
