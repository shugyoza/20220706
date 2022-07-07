// Bonus Task 1: Create a new component called person-form

import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Person, people } from '../Person.model';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

    @Input() people: Person[] = people;

    // Bonust Task 2: Create a reactive form called personForm thas a formGroup that consists of three formControls
    personForm = new FormGroup({
        id: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl('')
    })

    get id(): string {
        return this.personForm.value.id;
    }

    get firstName(): string {
        return this.personForm.value.firstName;
    }

    get lastName(): string {
        return this.personForm.value.lastName;
    }



    // Bonus Task 4.: Add a method to person-form.component.ts called addPerson() which takes the current value of the personForm and instantiates a new Person
    addPerson(id: string, firstName: string, lastName: string, people: Person[]): Person[] {
        const newPerson: Person = new Person(
            id,
            firstName,
            lastName
        )
        people.push(newPerson);
        this.personForm.reset();
        return people;
    }

}
