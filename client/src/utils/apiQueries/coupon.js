const API_HOST = import.meta.env.VITE_API_HOST

const getCouponsQuery = (params) => {
  const convertDiscount = Object.values(params.discount)
  const convertPrice = Object.values(params.price)

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/all?page=${params.currentPage}&pagesize=${params.pageSize}&price=${convertPrice}&discount=${convertDiscount}`
    .concat(params.type !== '' ? `&type=${params.type}` : ''))
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

const getCouponQuery = (param) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/${param}`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch especific coupon'))
  })
}

const getHotSales = () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/hotsales`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch the best offers'))
  })
}

const getListCoupons = (arrayId) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/listof`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({arrayId})
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch the list coupons by array ids'))
  })
}

export {
  getCouponsQuery,
  getCouponQuery,
  getHotSales,
  getListCoupons
}