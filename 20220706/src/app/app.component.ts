import { Component } from '@angular/core';

// 3.a. From app.component.ts, pull the json object into a class array called people
import { Person, people } from './Person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'List of People';

  // 3.b. pulled here
  people: Person[] = [
    new Person("1", "John", "Wick"),
    new Person("2", "Paula", "Abdul"),
    new Person("3", "Rue", "Paul")
  ]

  // 6. add a method to the app.component.ts called deletePerson(id: string) which calls the delete method on the people json object
  deletePerson(id: string): Person[] {

    for (let i = 0; i < this.people.length; i++) {
      let person = this.people[i];
      if (person.id === id) this.people.splice(i, 1);
    }
    return this.people;
  }

}
