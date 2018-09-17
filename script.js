const csvFile = 'input/FoodFacts.csv';
const readline = require('readline');
const fs = require('fs');

let header = [];
let dataofNE = [];
let dataofCE = [];
let dataofSE = [];
let finalarr = [];
let counter = 0;
const countries = ['Netherlands', 'Canada', 'United Kingdom', 'Australia', 'France', 'Germany', 'Spain'];
const countries1 = ['United Kingdom','Denmark','Sweden','Norway'];
const countries2 = ['France','Belgium','Germany','Switzerland','Netherlands'];
const countries3 = ['Portugal','Greece','Italy','Spain','Croatia','Albania'];
const countriess = ['United Kingdom','Denmark','Sweden','Norway','France','Belgium','Germany','Switzerland','Netherlands','Portugal','Greece','Italy','Spain','Croatia','Albania'];

let country;
let sugar;
let salt;
let fat;
let protein;
let carbohydrate
const finalObj = {};
const finalObj1 = {};
const finalObj2 = {};
const rl = readline.createInterface({
  input: fs.createReadStream(csvFile),
});
rl.on('line', (line) => {
  if (counter === 0) {
    header = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
    country = header.indexOf('countries');

    sugar = header.indexOf('sugars_100g');
    salt = header.indexOf('salt_100g');
    fat =header.indexOf('fat_100g');
    protein =header.indexOf('proteins_100g');
    carbohydrate =header.indexOf('carbohydrates_100g');
    counter++;
  }
  const row = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
  const isCountryImportant = countries.indexOf(row[country]);
  if (isCountryImportant > -1 && (row[salt] !== '' && row[sugar] !== '')) {
    const obj = {};
    if (finalObj[row[country]]) {
      finalObj[row[country]].salt += parseInt(row[salt], 10);
      finalObj[row[country]].sugar += parseInt(row[sugar], 10);
    } else {
      obj.sugar = parseInt(row[sugar], 10);
      obj.salt = parseInt(row[salt], 10);
      obj.country = row[country];
      finalObj[row[country]] = obj;
    }
  }


const isCountryImportant1 = countriess.indexOf(row[country]);
const isCountryImportant2 = countries1.indexOf(row[country]);
const isCountryImportant3 = countries2.indexOf(row[country]);
const isCountryImportant4 = countries3.indexOf(row[country]);
 if (isCountryImportant1 > -1 && (row[fat] !== '' && row[protein] !== ''  && row[carbohydrate] !== '')){
  
const obj = {};
  

  
 if ( isCountryImportant2 !== -1) {
      // let indexofsalt = head.indexOf("salt_100g");
      // let indexofsugar = head.indexOf("sugars_100g");

      // console.log("here", indexofsugar, indexofsalt, data[indexofsalt], data[indexofsugar])
      obj.country = row[country],
      obj.fat =  row[fat],
      obj.protein =  row[protein],
      obj.carbohydrate = row[carbohydrate]

      dataofNE.push(obj)
      // console.log(row[country]);
  }else 
  if ( isCountryImportant3 !== -1) {
      // let indexofsalt = head.indexOf("salt_100g");
      // let indexofsugar = head.indexOf("sugars_100g");

      // console.log("here", indexofsugar, indexofsalt, data[indexofsalt], data[indexofsugar])
      obj.country = row[country],
      obj.fat =  row[fat],
      obj.protein =  row[protein],
      obj.carbohydrate = row[carbohydrate]

      dataofCE.push(obj)
      // console.log(row[country]);
  }else 
  if ( isCountryImportant4 !== -1) {
      // let indexofsalt = head.indexOf("salt_100g");
      // let indexofsugar = head.indexOf("sugars_100g");

      // console.log("here", indexofsugar, indexofsalt, data[indexofsalt], data[indexofsugar])
      obj.country = row[country],
      obj.fat =  row[fat],
      obj.protein =  row[protein],
      obj.carbohydrate = row[carbohydrate]

      dataofSE.push(obj)
      // console.log(obj[country]);
  }
}
});
rl.on('close', () => {
  // console.log(dataofN)



let some_data = {
    fat : 0,
    protein : 0,
    carbohydrate : 0
  }
   let some_data1 = {
    fat : 0,
    protein : 0,
    carbohydrate : 0
  }
   let some_data2 = {
    fat : 0,
    protein : 0,
    carbohydrate : 0
  }

  function aggregator(array, region) {
    let SomeData0 = {
    fat : 0,
    protein : 0,
    carbohydrate : 0
  }
array.forEach((e) => {
  
   

    // console.log(parseInt(e.salt),  typeof parseInt(e.sugar), e)
    // console.log(e.salt)
    SomeData0.country = region;
    SomeData0.fat += parseInt(e.fat) || 0;
    SomeData0.protein += parseInt(e.protein) || 0;
    SomeData0.carbohydrate += parseInt(e.carbohydrate) || 0;
  });
return SomeData0;
}

some_data=aggregator(dataofNE,"NE");
some_data1=aggregator(dataofCE,"CE");
some_data2=aggregator(dataofSE,"SE");
console.log("&&&&&&&&&&&&&&&&&&&&&", some_data);
// console.log(some_data);
  // /
  // //   dataofNE.forEach(e => {
  // //     // console.log(parseInt(e.salt),  typeof parseInt(e.sugar), e)
  // //     // console.log(e.salt)
  //     some_data.country = "NE"
  //     some_data.fat += parseInt(e.fat) || 0
  //     some_data.protein += parseInt(e.protein) || 0
  //     some_data.carbohydrate += parseInt(e.carbohydrate) || 0
  //   })
  //   // console.log(some_data)

  //   let some_data1 = {
  //   fat : 0,
  //   protein : 0,
  //   carbohydrate : 0
  // }
  //   dataofCE.forEach(e => {
  //     // console.log(parseInt(e.salt),  typeof parseInt(e.sugar), e)
  //     // console.log(e.salt)
  //     some_data1.country = "CE"
  //     some_data1.fat += parseInt(e.fat) || 0
  //     some_data1.protein += parseInt(e.protein) || 0
  //     some_data1.carbohydrate += parseInt(e.carbohydrate) || 0
  //   })
  //   // console.log(some_data1)

  //   let some_data2 = {
  //   fat : 0,
  //   protein : 0,
  //   carbohydrate : 0
  // }
  //   dataofSE.forEach(e => {
  //     // console.log(parseInt(e.salt),  typeof parseInt(e.sugar), e)
  //     // console.log(e.salt)
  //     some_data2.country = "SE"
  //     some_data2.fat += parseInt(e.fat) || 0
  //     some_data2.protein += parseInt(e.protein) || 0
  //     some_data2.carbohydrate += parseInt(e.carbohydrate) || 0
  //   })
//     // console.log(some_data2)
  finalarr.push(some_data);
  finalarr.push(some_data1);
  finalarr.push(some_data2);
  // console.log(finalarr)



console.log("************", Object.values(finalObj));
  const myJSON = JSON.stringify(Object.values(finalObj));
  fs.writeFile('output/output.json', myJSON, 'utf8', () => {
  });


  console.log("************", Object.values(finalarr));
  const myJSON1 = JSON.stringify(Object.values(finalarr));
  fs.writeFile('output/output1.json', myJSON1, 'utf8', () => {
  });


  
});
