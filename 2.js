var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function test(person) {
    console.log(person.firstName);
}
test({
    firstName: '123',
    lastName: '123'
});
var users = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
];
function aaa(user) {
    return "<div id=\"" + user.id + "\">" + user.name.toLocaleLowerCase() + "</div>";
}
var html = users.map(function (x) { return aaa(x); });
var list = ['1', '2', '3'];
var list2 = [1, 2, 3];
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
