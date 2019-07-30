/* Question 1. a:
Write a class called Person that has 3 properties: a first name, a last name and a middle name. 
Create 2 instances of a Person. Print one of their first names.
*/
console.log(`/* Question 1. a:`);
class Person{
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (middleName === undefined) {
      this.middleName = 'N/A';
    } else {
      this.middleName = middleName;
    }
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person('Peter', 'Fiorentino');
let person2 = new Person('Joey', 'Pasaoa', 'P.');
let person3 = new Person('Kameron', 'Montague');

console.log(`First name of one of the persons : `, person1.firstName)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 1. b:
b. Write a method in Person called fullName that will return a formatted string of an instance's full name. 
Call this method on both the instances you created in part a.
*/
console.log(`/* Question 1. b:`);
console.log(`First person's full name : `, person1.fullName());
console.log(`Second person's full name : `, person2.fullName());
console.log(`Third person's full name : `, person3.fullName());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 2 a:
Create a class called Book that has properties title, author and rating. Create some instances of Book.
*/
console.log(`/* Question 2. a:`);
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood() {
    return this.rating >= 7;
  }
}

let book1 = new Book('Labyrinth', 'Catherine Coulter', 6);
let book2 = new Book('Sophia, Princess Among Beasts', 'James Patterson', 8);
let book3 = new Book('America\'s Reluctant Prince: The Life of John F. Kennedy Jr.', 'Steven M. Gillon', 9);
let book4 = new Book('The Inn', 'James Patterson', 8);
let book5 = new Book('Heaven', 'V.C. Andrews', 7);

console.log(`One of the books :`, book3, '\n');

/* Question 2 a:
b. Add a method to Book called isGood that returns true if its rating is greater than or equal to 7
*/
console.log('Question 2. b:')
console.log(`The book "${book1.title}" is a good book : `, book1.isGood());
console.log(`The book "${book2.title}" is a good book : `, book2.isGood());
console.log(`The book "${book3.title}" is a good book : `, book3.isGood());
console.log(`The book "${book4.title}" is a good book : `, book4.isGood());
console.log(`The book "${book5.title}" is a good book : `, book5.isGood());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 3. a:
Create a Dog class with four properties: name (string), breed (string), mood (string), and hungry (boolean).
*/
console.log('Question 3. a:');
class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.hungry = true;
    this.mood = 'playful';
    console.log(this.name, ` : Ruff!!`);
  }

  feed() {
    if (this.hungry) {
      this.hungry = false;
      console.log(this.name, ` : Woof!!`);
    } else {
      console.log(this.name, ` doesn't look hungry`)
    }
  }

  toString() {
    let feeding = 'not hungry';
    if (this.hungry){
      feeding = 'hungry';
    }
    return (`${this.name} is a ${this.mood} and ${feeding} ${this.breed}`);
  }
}

let dog1 = new Dog('Pluto', 'Beagle', 'Playful', false);
let dog2 = new Dog('Rex', 'Husky', 'Engaged', true);
let dog3 = new Dog('Ace', 'Shepherd', 'Relax', false);
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`\n`);

/* Question 3. b:
Add a method called playFetch. It should set the dog's hungry property to true, 
set its mood property to playful, and log "Ruff!"
*/
console.log('Question 3. b:');
dog2.playFetch();
dog3.playFetch();
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`\n`);

/* Question 3. c:
c. Add a method called feed. If the dog is hungry, it should set hungry to false and print "Woof!" 
If the dog is not hungry, it should log "The dog doesn't look hungry"
*/
console.log('Question 3. c:');
dog1.feed();
dog2.feed();
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`\n`);

/* Question 3. d:
Add a method called toString that returns a description of the dog:
*/
console.log('Question 3. d:');
console.log(dog1.toString());
console.log(dog2.toString());
console.log(dog3.toString());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 4:
There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
C = (F - 32) / 1.8 
F = 1.8 * C + 32 
K = C + 273

/* Question 4. a:
Make an object called freezingPoint that has three properties: celsius, fahrenheit, and kelvin. 
Give them all values equal to the freezing point of water.
*/
console.log(`Question 4. a.:`)
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  Kelvin: 273
};
console.log(`The water's freezing temperature :`, freezingPoint, '\n');



/* Question 4. b:
Make a class called Celsius that has one property: celsius, and two methods getFahrenheitTemp, and getKelvinTemp.

let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
*/
console.log(`Question 4. b.:`)
class Celsius {
  constructor(celsius) {
    this.celsius = celsius;
  }

  getFahrenheitTemp() {
    return 1.8 * this.celsius + 32;
  }

  getKelvinTemp() {
    return this.celsius + 273;
  }

  isBelowFreezing() {
    return (this.celsius < freezingPoint.celsius)
  }
}

let outsideTempt = new Celsius(10);
console.log(`Outside temperature : `, outsideTempt.celsius, `C`);
console.log(`Outside temperature : `, outsideTempt.getFahrenheitTemp(), `F`);
console.log(`Outside temperature : `, outsideTempt.getKelvinTemp(), `K`, `\n`);




/* Question 4. c:
Give Celsius a method called isBelowFreezing that returns a Bool (true if the temperature is below freezing).
*/
console.log(`Question 4. c:`);
let temp1 = new Celsius(-5);
let temp2 = new Celsius(1);
let temp3 = new Celsius(0);

console.log(temp1.celsius, `is bellow the freezing temperature`, temp1.isBelowFreezing());
console.log(temp2.celsius, `is bellow the freezing temperature`, temp2.isBelowFreezing());
console.log(temp3.celsius, `is bellow the freezing temperature`, temp3.isBelowFreezing());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 5. a:
Create a class called Movie that has properties for name, year, genre, cast, and description. 
Create an instance of your Movie
*/
console.log(`Question 5:`);
class Movie {
  constructor(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast
    this.description = description;
  }

  blurb() {
    return this.name+' came out in '+this.year+'. \nIt\'s a '+this.genre+' movie starring '+this.cast[0]+ ' as '+this.description
  }
}

let myMovie = new Movie('The Lion King', 2019, 'Comedy',
 ['Donald Glover','Beyoncé','Seth Rogen', 'Chiwetel Ejiofor', 'Billy Eichner'], 
 'Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa.');

/* Question 5. b: 
Create an method inside Movie called blurb that returns a formatted string describing the movie.
Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was 
visiting America from Kazakhstan."
*/
console.log(myMovie.blurb());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 6. a:
Write a class Vector that represents a vector in two-dimensional space. 
It takes two number arguments: x and y parameters, which it should be saved to properties of the same name.
*/
console.log(`Question 6:`);
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    let vect = new Vector;
    vect.x = this.x + v.x;
    vect.y = this.y + v.y
    return vect;
  }

  minus(v) {
    let vect = new Vector;
    vect.x = this.x - v.x;
    vect.y = this.y - v.y;
    return vect;
  }

  getLength() {
    return Math.hypot(this.x, this.y);
  }
}



/* Question 6. b:
Give the Vector prototype two methods, plus and minus, that take another vector as an argument 
and returns a new vector that has the sum or difference of the two vectors’ 
(the one in this and the parameter) x and y values.
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}
*/
let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

console.log(`The sum of `, v1,` and `, v2, ` is `, v1.plus(v2));
console.log(`The difference of `, v1,` and `, v2, ` is `, v1.minus(v2));


/* Question 6. c:
Add a method getLength to the prototype that computes the length of the vector ; 
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
*/
let v3 = new Vector(3, 4)
console.log('The length of ',v3, ' is ', v3.getLength());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 7. a:
Make a class called Car with properties make and model. Create an instance of a Car
*/
console.log('Question 7. a:');
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  static numberOfWheels() {
    return 4;
  }
}

let myCar = new Car('Nissan', 'Altima');
console.log(myCar, `\n`);

/* Question 7. b:
Make a class called Bike with properties gears and hasBell. Create an instance of Bike
*/
console.log('Question 7. b:');
class Bike {
  constructor(gears, hasBell) {
    this.gear = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels() {
    return 2;
  }
}

let myBike = new Bike(27, false);
console.log(myBike, `\n`);

/* Question 7. c: 
Give each class a static method called numberOfWheels that returns the number of wheels 
(2 for bikes, 4 for cars). Why does it make sense for this to be a static method instead of an instance method?
*/

console.log('Question 7. c:')
console.log(`Because the property 'numberOfWheels' is related to the class, 
(technicaly) all cars have 4 wheels and all bikes have 2 wheels
It's more related to all cars/bikes then it is to instances of cars/bikes

I think it's also the case for question 6.b, for the length, it.s more appropriate to use a static method`)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 8. a:
Make a class called Vehicle with properties color and name. 
Give it a method called makeSound which logs "WHHOOSSSH" to the console
*/
console.log(`Question 8:`);
class Vehicle {
  constructor (color, name) {
    this.color = color;
    this.name = name;
  }

  makeSound() {
    console.log(this.name, ` : WHHOOSSSH`);
  }
}


/* Question 8. b: 
Modify your Car and Bike classes from Question 7 to extend the Vehicle class.
*/
class VCar extends Vehicle {
  constructor(make, model, color, name) {
    super(color, name);
    this.make = make;
    this.model = model;
  }

  static numberOfWheels() {
    return 4;
  }
}

class VBike extends Vehicle {
  constructor(gears, hasBell, color, name) {
    super(color, name)
    this.gear = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels() {
    return 2;
  }
}


/* Question 8. c: 
Create a new Bike instance that has a color of "green" and name "Bikey McBikeface"
*/
let bikey = new VBike (27, false, 'green', 'Bikey McBikeface');
console.log(bikey, '\n');

/* Question 8. d: 
Create a new Car instance that has a color of "red" and name "Carry McCarface"
*/
let carry = new VCar('Chevy', 'Camaro', 'Blue', 'Carry McCarface');
console.log(carry);
carry.makeSound();
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);