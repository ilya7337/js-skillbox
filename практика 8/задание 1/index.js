
const countVowels = (word) => {
    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    return Array.from(word).filter(letter => vowelLetters.includes(letter)).length;
}

const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(vowelCount);