const colors = ["red", "blue", "black"];
const cars = ["BMW", "Mercedes", "Ferrari"];
const year = "2024 year";

// ! array-methods: join, concat, pop,
// ! push, unshift, shift, slice, splice, reverse

const user = {
  name: "Nika",
  age: 22,
  adress: {
    city: "Tbilisi",
    country: "Georgia",
  },
};

const { name, age } = user;
console.log(name, age);
const {
  address: { city },
} = user;
console.log(city);

function userinfo({ name, age }) {
  console.log(name, age);
}

userinfo(user);
