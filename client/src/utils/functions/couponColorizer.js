const couponColorizer = (number) => {
  if (number >= 50) return 'green.500'
  if (number >= 30) return 'yellow.500'
  if (number >= 15) return 'orange.500'
  if (number >= 5) return 'red.500'
}

export {
  couponColorizer
}