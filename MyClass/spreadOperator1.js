const books = [
  {
    item: "jinsebis taoba",
    howMuch: "10",
    money: "20",
    language: "georgian",
  },
  {
    item: "harry potter",
    howMuch: "5",
    money: "30",
    language: "english",
  },
  {
    item: "wigni",
    howMuch: "7",
    money: "45",
    language: "spanish",
  },
];

const Process = (book) => {
  const { item, ...rest } = book;
  const discount = rest.money * 0.05;

  const result = {};
  result.name = item;
  result.originalPrice = rest.money;
  result.discount = discount;
  result.otherInfo = rest;

  return result;
};

books.forEach((book) => {
  const result = Process(book);
  console.log(
    `${result.name}: $${result.originalPrice} - 5% discount = $${result.discount}`,
  );
});
