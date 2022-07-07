import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PersonFormComponent } from './person-form.component';
import { Person, people } from '../Person.model';

describe('PersonFormComponent', () => {
    let component: PersonFormComponent;
    let fixture: ComponentFixture<PersonFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PersonFormComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it(`should have as people, an array of instances of Person with three properties:
    id, firstName, lastName, all of them typeof string`, () => {
      const fixture = TestBed.createComponent(PersonFormComponent);
      const app = fixture.componentInstance;

      app.people.forEach((doc, i) => {
        expect(doc).toBeInstanceOf(Person);

        expect(doc.id).toBeTruthy();
        expect(typeof doc.id).toEqual('string');
        expect(doc.id).toEqual(people[i].id);

        expect(doc.firstName).toBeTruthy();
        expect(typeof doc.firstName).toEqual('string');
        expect(doc.firstName).toEqual(people[i].firstName);

        expect(doc.lastName).toBeTruthy();
        expect(typeof doc.lastName).toEqual('string');
        expect(doc.lastName).toEqual(people[i].lastName)
      })
    });


    it ('should have a method named: addPerson() that add an object instanceOf Person to the list of people', () => {
        const fixture = TestBed.createComponent(PersonFormComponent);
        const app = fixture.componentInstance;

        expect(app.addPerson).toBeTruthy();
        expect(typeof app.addPerson).toEqual('function');

        let list = JSON.parse(JSON.stringify(people)),
            _id = list.length + 1,
            firstName = 'testFirstName',
            lastName = 'testLastName',
            result = app.addPerson(_id, firstName, lastName, list),
            newPerson = result[result.length - 1];
        expect(result).toHaveSize(_id);
        expect(newPerson).toBeInstanceOf(Person);
        expect(newPerson.id).toEqual(_id);
        expect(newPerson.firstName).toEqual(firstName);
        expect(newPerson.lastName).toEqual(lastName);
    })


});
