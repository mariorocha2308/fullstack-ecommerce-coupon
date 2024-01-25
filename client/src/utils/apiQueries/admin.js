const API_HOST = import.meta.env.VITE_API_HOST

const getCouponsTableQuery = (params) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/admin/dash/table?page=${params.currentPage}&pagesize=${params.pageSize}`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

// const deleteCouponQuery = (param) => {

//   return new Promise((resolve, reject) => {
//     fetch(`${API_HOST}/admin/dash/delete/coupon/${param.id}`, {
//       method: "DELETE"
//     })
//     .then(response => response.json())
//     .then(result => resolve(result))
//     .catch(() => reject('Failed to fetch coupons'))
//   })
// }

// const createCouponQuery = (params) => {

//   return new Promise((resolve, reject) => {
//     fetch(`${API_HOST}/admin/dash/create/coupon`, {
//       method: "POST",
//       body: JSON.stringify()
//     })
//     .then(response => response.json())
//     .then(result => resolve(result))
//     .catch(() => reject('Failed to fetch coupons'))
//   })
// }

// const updateCouponQuery = (param) => {

//   return new Promise((resolve, reject) => {
//     fetch(`${API_HOST}/admin/dash/edit/coupon/${param.id}`)
//     .then(response => response.json())
//     .then(result => resolve(result))
//     .catch(() => reject('Failed to fetch coupons'))
//   })
// }

export { 
  getCouponsTableQuery,
  // deleteCouponQuery,
  // createCouponQuery,
  // updateCouponQuery
}
