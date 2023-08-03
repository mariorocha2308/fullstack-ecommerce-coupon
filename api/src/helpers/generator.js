const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandomTypes = (items = ["Concert", "Art", "Shop", "Cinema", "Theatre", "Party", "Food", "Marketplace"]) => {
  return items[Math.floor(Math.random()*items.length)]
}

module.exports = {
  generateRandomInteger,
  generateRandomTypes
}