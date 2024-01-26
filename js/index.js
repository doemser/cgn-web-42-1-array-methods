console.clear();

const colors = ["black", "red", "blue", "green"];

colors.forEach((color) => {
  const button = document.createElement("button");
  button.textContent = color;
  button.classList.add("super-button", "ultra-button");
  document.body.append(button);

  button.addEventListener("click", () => {
    console.log(color);
  });
});

const cats = [
  {
    id: "1",
    name: "Whiskers",
    breed: "Siamese",
    color: "brown",
    legs: 4,
  },
  {
    id: "2",
    name: "Luna",
    breed: "Persian",
    color: "white",
    legs: 4,
  },
  {
    id: "3",
    name: "Max",
    breed: "Maine Coon",
    color: "orange",
    legs: 4,
  },
  {
    id: "4",
    name: "Oliver",
    breed: "British Shorthair",
    color: "gray",
    legs: 4,
  },
  {
    id: "5",
    name: "Lucy",
    breed: "Ragdoll",
    color: "blue",
    legs: 4,
  },
];

cats.forEach((cat) => {
  console.log(cat.color);
});

const fruits = ["banana", "apple", "pear", "orange"];

const capsFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log("mapped", capsFruits);

//const filteredFruits = fruits.filter((fruit) => fruit !== "apple");

const filteredFruits = fruits.filter((fruit) => {
  if (fruit === "apple") {
    return false;
  } else {
    return true;
  }
});

console.log("filtered", filteredFruits);
