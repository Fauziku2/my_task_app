import { Component, Input } from "@angular/core";

import { Task } from "../model/task";

@Component({
  moduleId: module.id,
  selector: "app-card",
  templateUrl: "card.component.html",
  styleUrls: [ "card.component.css" ] // array because we might have more than one style css file
})

export class CardComponent {
  @Input() task: Task; // input property to allow data to be passed into the properties
}
