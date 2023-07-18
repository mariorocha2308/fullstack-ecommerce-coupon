const API_HOST = import.meta.env.VITE_API_HOST

const getCouponsQuery = (params) => {
  // const convertDiscount = Object.values(params.input.discount)
  // const convertPrice = Object.values(params.input.price)

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/coupon/all?page=${params.currentPage}&pagesize=${params.pageSize}`.concat(
      params.type !== '' ? `&type=${params.type}` : '',
      // params.input.discount ? `&discount=${convertDiscount}` : '',
      // params.input.price ? `&price=${convertPrice}` : ''
    ))
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

export {
  getCouponsQuery,
  getCouponQuery,
  getHotSales
}