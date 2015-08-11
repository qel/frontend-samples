
function sortWords(sentence) {
    return sentence
        .split(' ')
        .sort(function(a, b) { return a.length - b.length; })
        .join(' ');
}

console.log(sortWords("The quick brown fox jumped over the lazy dog"));

console.log(sortWords("A wizard's job is to vex chumps quickly in fog"));

console.log(sortWords("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));

