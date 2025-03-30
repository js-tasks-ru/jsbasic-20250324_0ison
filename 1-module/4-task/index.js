function checkSpam(str) {
  const banWords = ['xxx', '1xBet'];

  for (let index = 0; index < banWords.length; index++) {
    const banWord = banWords[index];

    if (str.toUpperCase().includes(banWord.toUpperCase())) {
      return true;
    }
  }

  return false;
}
