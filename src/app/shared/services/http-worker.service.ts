import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi='http://localhost:3000/workers';
  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data: MyWorker): Promise<any>{
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorker(id: number): Promise<any>{
    console.log(id);
    return this.http.delete(this.routeApi + `/${id}`).toPromise();
  }

  editWorker(id: number, worker: MyWorker): Promise<any>{
    return this.http.put(this.routeApi + `/${id}`, worker).toPromise();
  }
}
