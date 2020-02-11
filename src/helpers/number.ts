export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getPercentage(value: number, total: number) {
  return Math.floor((value * 100) / total);
}
