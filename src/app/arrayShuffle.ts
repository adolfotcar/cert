export function shuffle(array: string[] | null): string[] {
  if (!array || array.length === 0) {
    return []; // Return an empty array for null or empty input
  }

  // Create a copy to avoid modifying the original array directly.
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    const temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}