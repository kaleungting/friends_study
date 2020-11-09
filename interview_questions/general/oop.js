/*
========================================================================
JAVASCRIPT IS NOT A CLASS-BASED OBJECT ORIENTED LANGUAGE, 
IT IS A PROTOTYPE-BASED OOL

objects inherently have __proto__ functions and methods

it uses the keyword CLASS but really it's just syntatic sugar over prototyping that makes JS look like other OOP languages
polymorphism - a class will inherit the prototypical methods of the object it's part of 
    cat.__proto__.__proto__ = to get to the ANIMAL methods
========================================================================

Object Oriented Programming - refers to languages that use objects in programming
- Implement real-world entities like inheritance, hiding, polymorphism
- Aims to bind together the data and the function that operate on them so that no other part of the code can access this data except that function


Inheritance - 
    Having an overarching class that has properties common amongst the other objects

    for example, Bird has legs, colors, wings,
        pigeons and penguins objects will inherit these properties, along with other functions that belong to the Bird class

Encapsulation - enclose the initialization and retrieval of the attributes in a method instead of directly referring the attribute directly    
================================================================================================
    - restrict access and to control methods and behaviors   
    - HIDES implementation details 
    - bundling of methods
================================================================================================
    getter - has use when you want to run some code every time a property is requested,
        ex. returning a first name capitalized
    
    setter - has use when you want to run some code every time a property is set, preventing a falsey value, type, etc.

Polymorphism - the ability of the same object to take multiple forms
    pigeon -> bird -> animal
    different class to take on the same class methods

Abstraction - hiding things. represents the essential feature without concerning the background details
=====================================================================================
Used when you don't want to expose certain functions or properties to the end users
=====================================================================================
    - reduces complexity of viewing things
    - avoids code duplication and increases reusability
    - increase security of an application or program as only important details are provided to the user

Real World Applications

Agent: every object in the community act as an agent, every agent performs some actions and those actions are being used by other members of the community
Community: a community is formed by the creation of actions

    example: 
        Agents: User, Google, and other Objects
        Community: Search Engine Community

Message and Methods:
    Message: a request or response that is being passed to other members of the community
    Methods: performs an action in the community, used by members of the community to solve problems
    
Responsibilites: 
    - acceptance of request and performing action to provide desired result
*/

class Bird {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }

  get legs() {
    return this._legs;
  }

  set legs(newVal) {
    let val = Number(newVal);

    if (
      newVal == null ||
      typeof newVal === "string" ||
      !Number.isInteger(val) ||
      val < 0 ||
      val > 100
    ) {
      const err = `'value' must be an integer from 0 to 100 and not ${newVal}`;
      console.error(err);
      //throw new TypeError(err);
    }

    // save newVal
  }

  fly() {
    console.log("flying!");
  }
}

class Pigeon extends Bird {
  constructor(legs, color, hygiene) {
    super(legs, color);
    this.hygiene = hygiene;
  }

  get hygiene() {
    return this._hygiene;
  }

  set hygiene(hygiene) {
    this._hygiene = hygiene;
  }

  nyc() {
    console.log("from nyc");
  }
}

let purple = new Bird(10000, "purple", "dirty");
// purple.color = "purple";
// purple.fly();
// purple.nyc();
purple.hygiene = "clean";
purple.leg = 1000;
console.log(purple);
