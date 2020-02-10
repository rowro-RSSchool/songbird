export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getPercentage(value, total) {
  return Math.floor((value * 100) / total);
}
