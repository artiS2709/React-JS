// Hoisting discussion

//console.log(name);
//var name = "vasi";

// Constructor and this keyword discussing

function createPerson(name,age){
    this.name = name;
    this.age = age;
    this.display = function(){
        console.log(this.name, this.age);
    };
    return this;
}

const person1 = new createPerson("virat",36);
const person2 = new createPerson("sachin",45);
const person3 = new createPerson("dhoni",55);

console.log(person1);