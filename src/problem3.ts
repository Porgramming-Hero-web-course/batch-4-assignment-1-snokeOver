{
  //Problem3: A TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (sentence: string, word: string): number => {
    let wordCount: number = 0;

    const sentenceToArray = sentence.split(" ");

    for (const item of sentenceToArray) {
      if (item.toLowerCase() === word.toLowerCase()) wordCount++;
    }

    return wordCount;
  };

  // Testing

  console.log(countWordOccurrences("I love typescript", "typescript"));
}
