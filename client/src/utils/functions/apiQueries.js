const API_HOST = import.meta.env.VITE_API_HOST

const getCouponsQuery = () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/all`)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        reject(result.error)
        return;
      }
      resolve(result)
    })
    .catch(() => reject('Failed to fetch coupons'))
  })
}

export {
  getCouponsQuery
}