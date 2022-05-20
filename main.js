//! 'clothing' variable imported from clothing.js in the index.html file
const currentDate = document.getElementById("CurrentDate");
const topImg = document.getElementById("TopImg");
const bottomImg = document.getElementById("BottomImg");
const shoesImg = document.getElementById("ShoesImg");
const tryAgainButton = document.getElementById("TryAgainButton");

//! if you want the actual name of the weekday you can do this:
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//! Determines the correct nth of given number
const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
//! new Date() generates the current date
const getCurrentDate = new Date();
//! toDateString() converts new Date into a readable String like 'Sat May 21 2022'
//! By Splitting this String I can make more targeted changes to the individual elements as needed
const currentDateArr = getCurrentDate.toDateString().split(" ");
//! .getDay() gives you a number from 0 to 6 where Sunday is 0 and Saturday is 6
//! And by using this number as the key in 'weekday' I can get the Name of the day
const getDayOfTheWeek = weekday[getCurrentDate.getDay()];

//! Replacing the shorten day with full name
currentDateArr[0] = getDayOfTheWeek;
//! Replacing just the number date with the number plus it's 'nth' and ','
currentDateArr[2] = currentDateArr[2] + nth(currentDateArr[2]) + ",";

//! Joining back together the string with changes
const currentDateString = currentDateArr.join(" ");

//! Setting the innerHTML of CurrentDate to newly created variable 'currentDateString'
currentDate.innerHTML = `${currentDateString}`;

//! Switch Function that dertemine what the clothing type is for a given day
const getClothingType = function (day) {
  switch (day) {
    case 0:
      return "sport";
    case 6:
      return "casual";
    default:
      return "formal";
  }
};

//! Filtering out only the clothes for a specific type
const filteredTypeClothes = clothing.filter((e) => {
  if (e.dressCode.toLowerCase() === getClothingType(getCurrentDate.getDay())) {
    return e;
  }
  // if (e.dressCode.toLowerCase() === "casual") {
  //   return e;
  // }
  // if (e.dressCode.toLowerCase() === "sport") {
  //   return e;
  // }
});

//! Filters only 'tops'
const filterdTops = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "top") {
    return e;
  }
});

//! Filters only 'bottoms'
const filterdBottoms = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "bottom") {
    return e;
  }
});
console.log(filterdBottoms);

//! Filters only 'shoes'
const filterdShoes = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "shoes") {
    return e;
  }
});

//! Generates a random number between 0 and arr.length
const randomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

//! Sets random clothing choice upon page load
topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl;
bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl;
shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl;

//! OnClick Function that generates new clothing choices
tryAgainButton.onclick = function () {
  topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl;
  bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl;
  shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl;
};
