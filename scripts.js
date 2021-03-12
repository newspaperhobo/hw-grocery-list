// alert("hello!");

// PART 1

// prompts user for 1st grocery item, returns item in template literal to prompt user for quantity
let firstGroceryItem = prompt("Enter the first grocery item:");
let firstGroceryItemQuantity = prompt(`How many ${firstGroceryItem} would you like?`);

// prompts user for 2nd grocery item, returns item in template literal to prompt user for quantity
let secondGroceryItem = prompt("Enter the second grocery item:");
let secondGroceryItemQuantity = prompt(`How many ${secondGroceryItem} would you like?`);

// prompts user for 3rd grocery item, returns item in template literal to prompt user for quantity
let thirdGroceryItem = prompt("Enter the third grocery item:");
let thirdGroceryItemQuantity = prompt(`How many ${thirdGroceryItem} would you like?`);

// converts user quantity prompts to numbers 
firstGroceryItemQuantity = Number(firstGroceryItemQuantity);
secondGroceryItemQuantity = Number(secondGroceryItemQuantity);
thirdGroceryItemQuantity = Number(thirdGroceryItemQuantity);

// defines line items to output to console
let listItem1 =  (`${firstGroceryItemQuantity} ${firstGroceryItem}`);
let listItem2 =  (`${secondGroceryItemQuantity} ${secondGroceryItem}`);
let listItem3 =  (`${thirdGroceryItemQuantity} ${thirdGroceryItem}`);

// adds user quantities to output total
let totalItems = firstGroceryItemQuantity + secondGroceryItemQuantity + thirdGroceryItemQuantity;

// logs line items to console
console.log("Shopping List:");
console.log(listItem1);
console.log(listItem2);
console.log(listItem3);
console.log(`Total number of items: ${totalItems}`);

// PART 2

// code snippet
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";

// converts tongueTwister to lowercase
let bbytongueTwister = tongueTwister.toLowerCase();

// indexOf returns index of fox (within panagram) in a NUMBER format
let foxIndex = pangram.indexOf("fox");
// console.log(foxIndex);

// charAT returns 16th character of panagram in a STRING and transforms it to uppercase
let foxIndexUC = pangram.charAt(16).toUpperCase();
console.log(foxIndexUC);

// returns 11th character of anotherPanagram (not index)
let itGoesToEleven = anotherPangram.charAt(11-1);
console.log(itGoesToEleven);








