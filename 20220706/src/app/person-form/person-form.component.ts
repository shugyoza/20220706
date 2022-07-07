// Bonus Task 1: Create a new component called person-form

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Person, people } from '../Person.model';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

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

    ngOnInit() {}
}
