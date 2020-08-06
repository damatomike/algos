function knuthMorrisPrattAlgorithm(string, substring) {
  // Write your code here.
  let pattern = buildPattern(substring);
  return doesMatch(string, substring, pattern);
}

const buildPattern = (substring) => {
  let pattern = new Array(substring.length).fill(-1);
  let j = 0;
  let i = 1;
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return pattern;
};

const doesMatch = (string, substring, pattern) => {
  let i = 0;
  let j = 0;
  while (i + substring.length - j <= string.length) {
    if (string[i] === substring[j]) {
      if (j === substring.length - 1) {
        return true;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return false;
};
