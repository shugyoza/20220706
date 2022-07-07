// 4. Create a component called person which takes a Person as input and displays the first and last name of the person
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../Person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person!: Person;

  // 7. Add an Output EventEmitter field on the person component called deleteMe...
  @Output() deleteMe: EventEmitter<string> = new EventEmitter();

}
