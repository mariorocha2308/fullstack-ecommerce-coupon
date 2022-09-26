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

const findCouponsQuery = (input) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon?match=${input}`)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        reject(result.error)
        return;
      }
      resolve(result)
    })
    .catch(() => reject('Failed to fetch match coupons'))
  })
}

const getCouponQuery = (param) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/${param}`)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        reject(result.error)
        return;
      }
      resolve(result)
    })
    .catch(() => reject('Failed to fetch especific coupon'))
  })
}

export {
  getCouponsQuery,
  findCouponsQuery,
  getCouponQuery
}