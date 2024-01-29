import { getItem } from "react-safe-storage"

const API_HOST = import.meta.env.VITE_API_HOST
const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

const getCouponsTableQuery = (params) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/admin/dash/table?page=${params.currentPage}&pagesize=${params.pageSize}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user?.userToken}`
      }
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

const deleteCouponQuery = (id) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/admin/dash/delete/coupon/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user?.userToken}`
      }
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

const createCouponQuery = (params) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/admin/dash/create/coupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user?.userToken}`
      },
      body: JSON.stringify(params.data)
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

const updateCouponQuery = (params) => {
  console.log(params.data);

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/admin/dash/edit/coupon/${params.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user?.userToken}`
      },
      body: JSON.stringify(params.data)
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to fetch coupons'))
  })
}

export { 
  getCouponsTableQuery,
  deleteCouponQuery,
  createCouponQuery,
  updateCouponQuery
}
