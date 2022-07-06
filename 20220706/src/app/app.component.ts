import { Component, OnInit } from '@angular/core';

// 3. From app.component.ts, pull the json object into a class array called people
import { Person, people } from './Person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '20220706';

  people: Person[] = people;

  ngOnInit() {
    console.log(this.people)
  }
}
