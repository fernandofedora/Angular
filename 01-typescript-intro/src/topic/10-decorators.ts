function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
export class superClass{
   public myProperty: string = 'abc123'

   print(){
       console.log('Hello');
   }
}

console.log(superClass);
const myclass = new superClass();
console.log(myclass);