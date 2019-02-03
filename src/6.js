// So, the monad basically is a functor but with the special power to
//unwrap any value from it context using the flatMap.
//Arrays are monads as you can flat then by simply doing:

const person = {
  name: "someone",
  fbFriends: {
    count: 42
  }
};

const isNil = value => value === undefined || value === null;

const Nothing = {
  value: "Nothing",
  map: () => Nothing,
  flatMap: () => Nothing
};

const Just = value => {
  // console.log("****** inside Just");
  return {
    value: `Just(${JSON.stringify(value)})`,
    map: fn => safe(fn(value)),
    flatMap: fn => fn(value)
  };
};

const safe = value => {
  // console.log("====== inside safe");
  return isNil(value) ? Nothing : Just(value);
};

//prop function
const prop = key => obj => safe(obj[key]);

console.log(
  safe(person)
    .map(prop("fbFriends"))
    .map(prop("count")).value
);

// console.log(
//   safe(person)
//     .flatMap(prop("fbFriends"))
//     .flatMap(prop("count")).value
// );
