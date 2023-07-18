// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

//  let word = '';

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
         // console.log("Let's play some scrabble! Enter a word:");
        let word = input.question("Let's play some scrabble! Enter a word: ")
         //  console.log(scorerPrompt());
          return word
};
// console.log(initialPrompt());

let simpleScore = function(word){
   word = word.toLowerCase();
   let score = 0;
   score = word.length
   return score
}

// console.log(simpleScorer());

let vowelBonusScore = function(word){
   word = word.toLowerCase();
   let wordArr = word.split('');
   let bonusScore = 0;
   for (i = 0; i< wordArr.length; i ++){
      if(wordArr[i] === 'a'){
         bonusScore +=3
      }else if (wordArr[i] === 'e'){
         bonusScore+=3
      }else if(wordArr[i] === 'i'){
         bonusScore += 3
      }else if(wordArr[i] === 'o'){
         bonusScore += 3
      }else if(wordArr[i] === 'u'){
         bonusScore += 3
      }else{
         bonusScore ++
      }

      }
   wordArr.join('');
   return bonusScore
}

// console.log(vowelBonusScore(word));

// let word = '';

let scrabbleScore =  function (word){
      word = word.toLowerCase();
      let wordArr = word.split('');
      let score = 0;
      for(i = 0; i < word.length; i ++){
         // console.log(newPointStructure);
         for(key in newPointStructure){
            if(word[i] === key){
               score += newPointStructure[word[i]]
               // console.log(score);
            }
         }
      }
      return score
      // return oldScrabbleScorer(word)
   };

const scoringAlgorithms = [{
   'name': 'Simple Score',
   'description': 'A function with parameter for users input that returns a score',
   'scorerFunction': simpleScorer = function (word){
      return simpleScore(word)
   }
}, {
   'name': "Bonus Vowels",
   'description': "Vowels are 3 pts, consonants are 1 pt.",
   'scorerFunction': vowelBonusScorer = function (word){
     return vowelBonusScore(word)
   }
}, {'name': 'Scrabble',
'description': 'The traditional scoring algorithum',
'scorerFunction': scrabbleScorer = function (word){
   return scrabbleScore(word)
}}];
// console.log(scoringAlgorithms[2].scoreFunction);
function scorerPrompt() {
   word = initialPrompt();
   info2 = input.question("Which scoring algorithm would you like to use?\n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: ")
      // if (info2 == 0){
      //    console.log(simpleScore(word));
      // }else if (input2 == 1){
      //    console.log(vowelBonusScore(word));
      // }else{
      //    console.log(oldScrabbleScorer(word));
      // };
   console.log(`Score for ${word} : ${scoringAlgorithms[info2].scoreFunction(word)}`);
   return scoringAlgorithms[info2].scoreFunction(word);
}
// console.log(scoringAlgorithms[0].description);
function transform(oldPointStructure) {
   let newPts = {};
    for (let key in oldPointStructure){
       // let newPts = {oldPointStructure[key]: key,}
 // console.log(key)
       for (i = 0; i < oldPointStructure[key].length; i ++){
         // console.log(oldPointStructure[key][i]);
         // console.log(key);
         newPts[oldPointStructure[key][i].toLowerCase()] = Number(key)
       }
    }
 return newPts
 };
//  console.log(transform(oldPointStructure));

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   // initialPrompt();
   transform(oldPointStructure);
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
