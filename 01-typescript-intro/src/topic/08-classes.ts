export class Person {
    // public name: string;
    // private address: string;

    public firstName: string;
    public lastName: string;
    private address: string;

    constructor(
        firstName: string,
        lastName: string,
        address: string = 'No address'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        console.log(this.address);
    }


}
//export class Hero extends Person {  
//constructor(
//  public alterEgo: string,
//public age: number,
//public realName: string,

//){
//  super(realName, 'New York');
//}
//}

export class Hero {

    //public person: Person;
    public alerteEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(
        alerteEgo: string,
        age: number,
        realName: string,
        person: Person,
    ) {
        this.alerteEgo = alerteEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}
const tony = new Person('Tony', 'stark', 'New York');
const iroman = new Hero('Iron', 45, 'illinios', tony);

console.log(iroman);
