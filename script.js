const foodData = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
  {
    id: 21,
    foodname: "Salmon",
    calorie: 206,
    category: "Protein",
    protiens: 22,
    cab: 0,
  },
  {
    id: 22,
    foodname: "Tuna",
    calorie: 179,
    category: "Protein",
    protiens: 39,
    cab: 0,
  },
  {
    id: 23,
    foodname: "Beef",
    calorie: 250,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 24,
    foodname: "Pork",
    calorie: 242,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 25,
    foodname: "Lamb",
    calorie: 294,
    category: "Protein",
    protiens: 25,
    cab: 0,
  },
  {
    id: 26,
    foodname: "Shrimp",
    calorie: 85,
    category: "Protein",
    protiens: 20,
    cab: 0.2,
  },
  {
    id: 27,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 28,
    foodname: "Brown Rice",
    calorie: 216,
    category: "Grain",
    protiens: 4.5,
    cab: 45,
  },
  {
    id: 29,
    foodname: "Oats",
    calorie: 389,
    category: "Grain",
    protiens: 16.9,
    cab: 66,
  },
  {
    id: 30,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 31,
    foodname: "Bread",
    calorie: 265,
    category: "Grain",
    protiens: 9.4,
    cab: 49,
  },
  {
    id: 32,
    foodname: "Pasta",
    calorie: 131,
    category: "Grain",
    protiens: 5.5,
    cab: 26,
  },
  {
    id: 33,
    foodname: "Milk",
    calorie: 60,
    category: "Dairy",
    protiens: 3.2,
    cab: 5.1,
  },
  {
    id: 34,
    foodname: "Cheese",
    calorie: 402,
    category: "Dairy",
    protiens: 25,
    cab: 2.4,
  },
  {
    id: 35,
    foodname: "Yogurt",
    calorie: 59,
    category: "Dairy",
    protiens: 3.5,
    cab: 5,
  },
  {
    id: 36,
    foodname: "Butter",
    calorie: 717,
    category: "Dairy",
    protiens: 0.9,
    cab: 0.1,
  },
  {
    id: 37,
    foodname: "Almonds",
    calorie: 579,
    category: "Nuts",
    protiens: 21,
    cab: 22,
  },
  {
    id: 38,
    foodname: "Walnuts",
    calorie: 654,
    category: "Nuts",
    protiens: 15,
    cab: 14,
  },
  {
    id: 39,
    foodname: "Peanuts",
    calorie: 567,
    category: "Nuts",
    protiens: 26,
    cab: 16,
  },
  {
    id: 40,
    foodname: "Cashews",
    calorie: 553,
    category: "Nuts",
    protiens: 18,
    cab: 30,
  },
];

//Question-1   List all the food items.

const foodList = document.getElementById("foodList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  const li = document.createElement("li");
  li.textContent = `Foodname: ${item.foodname}, Category: ${item.category}, Calories: ${item.calorie}, Proteins: ${item.protiens}, Carbs: ${item.cab}`;
  foodList.appendChild(li);
}

//Question-2   List all the food items with category vegetables.

const vegetableList = document.getElementById("vegetableList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Vegetable") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      vegetableList.appendChild(li);
  }
}

//Question-3   List all the food items with category fruit.

const fruitList = document.getElementById("fruitList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Fruit") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      fruitList.appendChild(li);
  }
}


//Question-4   List all the food items with category protien.

const proteinList = document.getElementById("proteinList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Protein") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      proteinList.appendChild(li);
  }
}


//Question-5   List all the food items with category nuts.

const nutsList = document.getElementById("nutsList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Nuts") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      nutsList.appendChild(li);
  }
}


//Question-6   List all the food items with category Grains.

const grainList = document.getElementById("grainList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Grain") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      grainList.appendChild(li);
  }
}


//Question-7   List all the food items with category Grains.

const dairyList = document.getElementById("dairyList");

for (let i = 0; i < foodData.length; i++) {
  const item = foodData[i];
  if (item.category === "Dairy") {
      const li = document.createElement("li");
      li.textContent = `${item.foodname}`;
      dairyList.appendChild(li);
  }
}

//Question-8  List all the food items with calorie above 100.

const calorieAbove100List = document.getElementById("calorieAbove100List");

for (let i = 0; i < foodData.length; i++) {
    const item = foodData[i];
    if (item.calorie > 100) {
        const li = document.createElement("li");
        li.textContent = `${item.foodname}, Calories: ${item.calorie}`;
        calorieAbove100List.appendChild(li);
    }
}


//Question-9  List all the food items with calorie below 100.

const calorieBelow100List = document.getElementById("calorieBelow100List");

for (let i = 0; i < foodData.length; i++) {
    const item = foodData[i];
    if (item.calorie < 100) {
        const li = document.createElement("li");
        li.textContent = `${item.foodname}, Calories: ${item.calorie}`;
        calorieBelow100List.appendChild(li);
    }
}

//Question-10 List all the food items with highest protien content to lowest.


const proteinSortedItemList = document.getElementById("proteinSortedItemList");


const sortedFoodData = foodData.slice().sort((a, b) => b.protiens - a.protiens);


const listItems = sortedFoodData.map(item =>
    `<li>Foodname: ${item.foodname} - Proteins: ${item.protiens}</li>`
);


proteinSortedItemList.innerHTML = listItems.join("");


//Question-11 List all the food items with lowest cab content to highest.


const carbSortedItemList = document.getElementById("carbSortedItemList");


const sortedFoodDataOfCarb = foodData.slice().sort((a, b) => a.cab - b.cab);


const listItemsOfCarb = sortedFoodDataOfCarb.map(item =>
    `<li>Foodname: ${item.foodname} - Carbs: ${item.cab}</li>`
);


carbSortedItemList.innerHTML = listItems.join("");