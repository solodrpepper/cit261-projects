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
  }

  // this method will return the Users whole name
  createWholeName() {
    let mid = !this._middleInitial ? `` : this._middleInitial;
    this._wholeName = (`${this._firstName} ${mid}. ${this._lastName}`);
    return this._wholeName;
  }

  // This will be a welcome message used for welcoming users
  welcomeMessage() {
    const wholeName = createWholeName();
    const welcomeMessage = (`Welcome, ${wholeName}!`);
    return welcomeMessage;
  }


}