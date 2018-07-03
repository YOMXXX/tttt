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

function test(person: Person) {
    console.log(person.firstName);
}

test({
    firstName: '123',
    lastName: '123'
});

type user = {
    id: number,
    name: string
}
const users: user[] = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
];

function aaa(user: user) {
    return `<div id="${user.id}">${user.name.toLocaleLowerCase()}</div>`
}

const html = users.map(x => aaa(x))
let list: string[] = ['1', '2', '3']
let list2: Array<number> = [1, 2, 3];

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");