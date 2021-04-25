// const updateArray = append<string>("baz", ["foo", "bar"]);
// const searchStr = "foo";

// const hasSearchedString = any<string>((el: string) => el.includes(searchStr), [
//   "foooo",
//   "bar",
//   "baz",
// ]);

//generics interfaces and function in Ts
//use by defaul T to declare generic

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserGeneric<T, V> {
  name: string;
  data: T;
  meta: V;
}

const userTest: UserGeneric<{ meta: string }, string> = {
  name: "lucas",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const userTest2: UserGeneric<string[], string> = {
  name: "lucas",
  data: ["foo", "faa", "ssss"],
  meta: "bar",
};

// const result = addId<UserGeneric>(userTest);

// console.log("result ", result);

//passing several data types
