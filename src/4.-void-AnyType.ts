//void in typescript

const doSomething = (): void => {
  console.log("something");
};

//Any
let foo: any = "foo";
console.log(foo.bar());

//never
const doNever = (): never => {
  throw "never";
};

//unknow
let variableAny: any = 10;
let variableUnknown: unknown = 10;

let test2: string = variableUnknown as string;
let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;
//type Assertions
