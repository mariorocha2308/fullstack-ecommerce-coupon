const API_HOST = import.meta.env.VITE_API_HOST

const postReview = (data) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/review/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      },
      body: JSON.stringify(data.payload)
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post review'))
  })
}


const updateReview = (data) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/review/put/${data.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      },
      body: JSON.stringify(data.payload)
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to update review'))
  })
}

const deleteReview = (data) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/review/delete/${data.payload.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      }
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to delete review'))
  })
}

export {
  postReview,
  updateReview,
  deleteReview
}