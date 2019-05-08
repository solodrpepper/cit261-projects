/*
  The purpose of this file is to demenstrate Fluency in JS Ojects
    JavaScript – Object Creation Functions, Properties, Methods, Instantiation
*/

// Let's start by creating an object
class Person {
  constructor(firstName, middleInitial, lastName, age) {
    this._firstName     = firstName;
    this._middleInitial = middleInitial;
    this._lastName      = lastName;
    this._age           = age;
    this._wholeName     = createWholeName();
  }

  // this method will return the Users whole name
  createWholeName() {
    let mid = !this._middleInitial ? `` : this._middleInitial;
    return (`${this._firstName} ${mid}. ${this._lastName}`);
  }

  // This will be a welcome message used for welcoming users
  welcomeMessage() {
    return (`Welcome, ${this._wholeName}!`);
  }


}