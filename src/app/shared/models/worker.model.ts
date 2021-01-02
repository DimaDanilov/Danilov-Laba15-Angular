export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  phone_number: string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}
