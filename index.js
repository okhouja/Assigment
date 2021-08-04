const args = process.argv.slice(2);
//console.log(args);

const result = (str) => {
  let newArray = str.map((word) => {
    let fixedWord = word.trim();
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });
  console.log(newArray);
};
result(args);
