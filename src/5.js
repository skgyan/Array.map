// we want to have user define data type

//So, What are Functors ?
//Functors are the containers that can be used with ‘map’ function.
//https://hackernoon.com/functors-in-javascript-20a647b8f39f

const person = {
  name: "someone",
  fbFriends: {
    count: 42
  }
};

const isNil = value => value === undefined || value === null;

const Nothing = {
  value: "Nothing",
  map: () => Nothing
};

const Just = value => {
  // console.log("****** inside Just");
  return {
    value: `Just(${JSON.stringify(value)})`,
    map: fn => safe(fn(value))
  };
};

const safe = value => {
  // console.log("====== inside safe");
  return isNil(value) ? Nothing : Just(value);
};

console.log(safe(person.fbFriends).map(x => x.count * 2));

// const count = safe(person.tbFriends).map(x => x.count);
// console.log(count.map(x => x * 2));
//console.log(safe(person.twFriends).map(x => x.count).value);
