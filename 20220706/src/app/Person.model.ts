// 1. Create a Person class with fields id, firstName, lastName string

export class Person {
    public id?: string;
    public firstName!: string;
    public lastName!: string;

    constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName
    }
}

// 2. Create a JSON object with a list of 3 Persons;
export let people: Person[] = [
    new Person("1", "John", "Wick"),
    new Person("2", "Paula", "Abdul"),
    new Person("3", "Rue", "Paul")
]
