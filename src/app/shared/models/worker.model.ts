export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  phone_number: string;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}
