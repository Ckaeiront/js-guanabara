const smash = (words) => {
  var word = "";
  for (let i of words) {
    word += words[i] + " ";
  }
  return word.slice(0, -1);
}

let sentenceArray = ["Hello", "JavaScript", "world"];

console.log(smash(sentenceArray));
