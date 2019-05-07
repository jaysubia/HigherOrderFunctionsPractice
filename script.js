const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//////////////////////////////////////////////////////////////////////////////////////////////////////
// forEach - method calls a provided function once for each element in an array, in order.
// for
// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i]);
// }


// the parameter(iterator) can be anything you want it to be in this case we can call it company
// companies.forEach(function(apple){
//   console.log(apple);
// });
// companies.forEach(function(company){
//   console.log(company);
// });
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// filter - method creates an array filled with all array elements that pass a test (provided as a function)
// let canDrink = [];
// for(let i =0; i< ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age){
//   if(age >= 21){
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

//Filter retail companies
// const retailCompanies = companies.filter(function(company){
//   if(company.category === 'Retail'){
//     return true;
//   }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// const eightiesCompanies = companies.filter((company) => (company.start >= 1979 && company.start < 1990) );

// console.log(eightiesCompanies);

// Get companies that lastedTenYears or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// map - method creates a new array with the results of calling a function for every array element.
// Create array of company names
// const companyNames = companies.map(function(company){
//   return company.name;
// });

// const testMap = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map((company) => (`${company.name} [${company.start} - ${company.end}]`));
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// sort - method sorts an array alphabetically
// const sortedCompanies = companies.sort(function(c1, c2){
//   if(c1.start > c2.start){
//     return 1;
//   }else{
//     return -1;
//   }
// });
// //sorted needs ternary operator if you want a specific
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// //Sort Ages
// // const sortAges = ages.sort(); // this way you will find a five out of order it gives it an imaginary 0 so its treated like 50
// const sortAges = ages.sort((a,b) => a-b); //this way will put the 5 where it goes and will go from small to largest
// // const sortAges = ages.sort((a,b) => b-a); //this way will go from largest first to smallest
// console.log(sortAges);
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// reduce - The reduce() method reduces the array to a single value.

// let ageSum = 0;
// for(let i=0; i< ages.length;i++){
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//   return total + age
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);


// console.log(ageSum)
