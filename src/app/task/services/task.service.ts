import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      title: 'Jugar mi fuchibol',
      completed: true,
    },
    {
      title: 'Terminar el proyecto de TODO LIST',
      completed: false,
    },
  ];

  constructor() {}

  findAll(): Task[] {
    return this.tasks;
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  update(task: Task, change: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = { ...task, ...change };
  }

  delete(task: any): void {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
