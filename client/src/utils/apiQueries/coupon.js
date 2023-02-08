const API_HOST = import.meta.env.VITE_API_HOST

const getCouponsQuery = (params) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/all?page=${params.currentPage}&pagesize=${params.pageSize}`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

const findCouponsQuery = (input, currentPage, pageSize) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/find?type=${input.type}&page=${currentPage}&pagesize=${pageSize}`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch match coupons'))
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

export {
  getCouponsQuery,
  findCouponsQuery,
  getCouponQuery,
  getHotSales
}