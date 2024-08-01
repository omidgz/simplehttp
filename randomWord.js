exports.randomWord = function () {
  const words = ["apples", "pear", "cheese", "glass", "teal", "table", "kids", "banana"];
  const rnd = Math.floor( Math.random() * words.length-1);
  const word = words[rnd];
  return word;
};