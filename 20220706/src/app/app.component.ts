import { Component, OnInit } from '@angular/core';

// 3.a. From app.component.ts, pull the json object into a class array called people
import { Person, people } from './Person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '20220706';

  // 3.b. pulled here
  people: Person[] = people;

  // 6. add a method to the app.component.ts called deletePerson(id: string) which calls the delete method on the people json object
  deletePerson(id: string): Person[] {
    this.people = this.people.filter((document) => document.id !== id);
    return this.people;
  }

  ngOnInit(): void { }

}
