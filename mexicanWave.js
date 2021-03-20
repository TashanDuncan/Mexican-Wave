function wave(str) {
  // Code here

  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      null;
    } else {
      const toArray = str.split('');

      let wave = [];

      function capitalize(letter, index) {
        if (index === i) {
          wave.push(letter.toUpperCase());
        } else {
          wave.push(letter);
        }
      }

      toArray.forEach(capitalize);
      result.push(wave.join(''));
    }
  }
  return result;
}
