const getNormalizedDigitsString = (value, length = 2) => {
  const inputLength = String(value).length;
  if (inputLength < length) {
    return new Array(length - inputLength).fill("0").join("") + value;
  }
  return value;
};

const getFormattedTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = getNormalizedDigitsString(time % 60);

  return `${minutes}:${seconds}`;
};

export { getFormattedTime };
