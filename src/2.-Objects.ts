//help in created objec and types
//the interface to convent is capital the first letter
interface User {
  name: string;
  age?: number; // if not is mandatory it use character ? to is now optional
  //create functions
  getMessage(): string;
}

class UserImplement implements User {
  name: string;
  age?: number;
  constructor(parameters) {}
  getMessage(): string {
    throw new Error("Method not implemented.");
  }
}

//objects in ts
const user: User = {
  name: "Lucas",
  age: 2,
  getMessage() {
    return `Hello ${name}`;
  },
};

const user2: User = {
  name: "Jack",
  getMessage() {
    return `Hello2 ${name}`;
  },
};

//show de data
console.log(user.name);
