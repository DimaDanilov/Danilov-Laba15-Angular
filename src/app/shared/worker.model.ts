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

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0 , phone_number: "(916) 888-55-22"},
  { id: 2, name: 'Петр', surname: 'Петров', type: 1 , phone_number: "(914) 345-54-22"},
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2 , phone_number: "(916) 964-42-11"},
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3 , phone_number: "(916) 123-45-59"},
];
