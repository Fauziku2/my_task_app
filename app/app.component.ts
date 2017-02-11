import { Component } from "@angular/core";

import { Task } from "./model/task";

@Component({
  moduleId: module.id, // so that we can use templateUrl
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: [ "app.component.css" ]
})

// private - nothing outside of this component can modified this data
export class AppComponent {
  private tasks: Task[] = [];
  private currentTask = new Task(null, false);

  addTask() {
    let task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task);
    this.currentTask.content = null;
  }
}
