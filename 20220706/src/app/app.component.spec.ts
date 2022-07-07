import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Person, people } from '../app/Person.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'List of People'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('List of People');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('List of People');
  });


  it(`should have as people, an array of instances of Person with three properties:
  id, firstName, lastName, all of them typeof string`, () => {
    const fixture = TestBed.createComponent(AppComponent);
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


  it ('should have a method named: deletePerson() that deletes an object from the list of people', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.deletePerson).toBeTruthy();
    expect(typeof app.deletePerson).toEqual('function');

    let _id = '1';
    let result = app.deletePerson(_id);
    result.forEach((doc) => {
      expect(doc.id).not.toEqual(_id);
    });

    _id = '2';
    result = app.deletePerson(_id);
    result.forEach((doc) => {
      expect(doc.id).not.toEqual(_id);
    });

    _id = '3';
    result = app.deletePerson(_id);
    result.forEach((doc) => {
      expect(doc.id).not.toEqual(_id);
    });

  })

});
