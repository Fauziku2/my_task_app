import { Component } from "@angular/core";

import { Task } from "./model/task";

@Component({
  moduleId: module.id, // so that we can use templateUrl
  selector: "my-app",
  templateUrl: "app.component.html"
})

// private - nothing outside of this component can modified this data
export class AppComponent {
  private tasks = [
    new Task(
      "Buy a monkey",
      false
    ),
    new Task(
      "Walk the turtle",
      false
    )
  ];
}
