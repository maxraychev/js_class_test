/**
 * Created by xray on 4/17/2015.
 */

var Mammal, Dog, dog;

Mammal = function (name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
};

Dog = function (name) {
    Mammal.apply(this, arguments);
};

Dog.prototype - Object.create(Mammal.prototype);
Dog.prototype.constructor = Mammal;
Dog.prototype.bark = function () {
    return "Dog " + this.name + " is saying bark";
};

dog = new Dog('goofy');
console.log(dog.getName() == 'goofy');
console.log(dog.bark() === 'Dog ' + dog.getName() + ' is saying bark');
