function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTypes (items = ["Concert", "Art", "Shop", "Cinema", "Theatre"]) {
  return items[Math.floor(Math.random()*items.length)]
}

module.exports = {
  generateRandomInteger,
  generateRandomTypes
}