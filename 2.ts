class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
let x: [string, number];
x = ['hello', 10]; // OK

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;