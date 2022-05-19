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

const getCurrentDate = new Date();
const currentDateArr = getCurrentDate.toDateString().split(" ");
//! .getDay gives you a number from 0 to 6 where Sunday is 0 and Saturday is 6
const getDayOfTheWeek = weekday[getCurrentDate.getDay()];
currentDateArr[0] = getDayOfTheWeek;
currentDateArr[2] = currentDateArr[2] + nth(currentDateArr[2]) + ",";
const currentDateString = currentDateArr.join(" ");

currentDate.innerHTML = `${currentDateString}`;

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

const filterdTops = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "top") {
    return e;
  }
});
const filterdBottoms = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "bottom") {
    return e;
  }
});
const filterdShoes = filteredTypeClothes.filter((e) => {
  if (e.type.toLowerCase() === "shoes") {
    return e;
  }
});

const randomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl;
bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl;
shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl;

tryAgainButton.onclick = function () {
  topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl;
  bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl;
  shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl;
};
