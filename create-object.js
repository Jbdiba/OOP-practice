// Creating objects practice:

//1. fruit array
let fruit = ["apple","banana","mango"]
console.log(fruit[1])

//2. banana object
let banana = {
    color : "yellow",
    flavor : "sweet",
    region : "tropical",
};

//3. logging array and object variables
console.log(fruit)
console.log(banana)

//4. ES6 class constructor
class Fruit {
    constructor(flavor){
        this.flavor = flavor
    }
}
//5. new class instance
let mango = new Fruit("sweet");

//6. Object.create meth
let apple = Object.create(banana)
console.log(mango)


//7. Object example:
let pusheen ={
    name: 'Pusheen',
    age: 7,
    color:'gray and tabby'
};

pusheen.brother ="Jhon"
pusheen.sister = "Tammy"
pusheen.age = 14

console.log(pusheen);

//8. declare pusheen array
let arrPush = ['Pusheen',7]

//define pusheen object
let pusheen = {
    name : 'Pusheen',
    age : 7,
    color : 'gray and tabby',
};

pusheen.sister = "Stormy"
delete pusheen.sister
console.log(pusheen)

//creates an array of all the key names
let keys = Object.keys(pusheen)
console.log(keys)
console.log(keys[0])

console.log(pusheen.name === pusheen['name'])

//9. Object.create() method example:

const person = {
    ishuman : false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true ; // inherited properties can be overwritten

me.printIntroduction();


const me2 = Object.create(person);
me2.name = 'Michael'; // "name" is a property set on "me2", but not on "person"
me2.ishuman = false; // inherited properties can be overwritten

me2.printIntroduction();

//10.  Using object.create to make a new object, inheriting the properties of apprentice:

// template object:

const apprentice = {
    name: 'John',
    id: 1,
    fav_animal: "cat"
}

// making a new object:

const George = Object.create(apprentice)

George.name = "George"
George.id = 2
George.fav_animal = "cat"

console.log(George)
