import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

  @Output() createTask: EventEmitter<any> = new EventEmitter<any>();
  public newTask: string = '';

  addTask(): void {
    this.createTask.emit('Evento emitido desde input task');
  }
}
