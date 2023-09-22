import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  addTask(event: any): void {
    console.log('Respuesta: ', event);
  }
  
}
