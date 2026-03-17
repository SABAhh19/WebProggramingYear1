const movies = [
  { title: "Batman", year: 2022, description: "this is movie about bats" },
  { title: "Avatar", year: 2009, description: "this is movie about blue guys" },
  { title: "Inception", year: 2010, description: "this is deep movie" },
];
const elem = document.getElementById("list");

for (let i = 0; i < movies.length; i++) {
  elem.innerHTML += `<h1>${movies[i].title}</h1>
  <h3>${movies[i].year}</h3>
  <p>${movies[i].description}</p>`;
}
