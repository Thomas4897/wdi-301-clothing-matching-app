// import { clothing } from "./clothing";
// console.log("Clothing Array:", clothing);
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

const clothing = [
  {
    description: "Michael Kors Blue Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Calvin Klein Steel Gray Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc=255,255,255&wid=400&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=webp",
  },
  {
    description: "Michael Kors Pink Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Michael Kors White Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Alfani Short Sleeve Shirt",
    type: "top",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Tommy Hilfiger white Short Sleeve Shirt",
    type: "top",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Wrangler Graphic T-shirt",
    type: "top",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Adidas red T-shirt",
    type: "top",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Nike Giannis Basketball Sneakers",
    type: "shoes",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Adidas High Top Sneakers",
    type: "shoes",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Sperry Brown Shoes",
    type: "shoes",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Sperry Brown Shoes",
    type: "shoes",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Sperry Brown Shoes",
    type: "shoes",
    dressCode: "formal",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/styleguide/resources/images/about/styleTips/Q27/27header.jpg",
  },
  {
    description: "Casual Pants",
    type: "bottom",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Dress Blue Pants",
    type: "bottom",
    dressCode: "casual",
    imageUrl:
      "https://www.macys.com/shop/product/mens-haggar-cool-18-pro-classic-fit-expandable-waist-flat-front-stretch-dress-pants?ID=4372158&CategoryID=89",
  },
  {
    description: "Blue Dress Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://www.macys.com/shop/product/mens-haggar-cool-18-pro-classic-fit-expandable-waist-flat-front-stretch-dress-pants?ID=4372158&CategoryID=89",
  },
  {
    description: "Gray Dress Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Black Dress Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Adidas Track Pants",
    type: "bottom",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Adidas Jogger Pants",
    type: "bottom",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp",
  },
];

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
