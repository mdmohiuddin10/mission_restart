class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
      eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed, age){
        super(name, age)
        this.name= name;
        this.breed = breed;
    }
  
    bark(){
        console.log(`${this.name} is barking`);
    }
}
const dog1 = new Dog('Deshi', 'Coffe', 88)
dog1.eat()
console.log(dog1);


class Cat extends Animal{
    constructor(name, color, age){
        super(name, age);
        this.color = color;
    }
    meow(){
        console.log(`${this.name} is barking`);
    }
}

const cat1 = new Cat('Tom', 'white', 5)
cat1.eat()