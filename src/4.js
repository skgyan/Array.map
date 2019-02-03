const person = {
  name: "someone",
  fbFriends: {
    count: 42
  }
};

const isNil = value => value === undefined || value === null;

const safe = value => (isNil(value) ? [] : [value]);

console.log(safe(person.fwFriends).map(x => x.count));
