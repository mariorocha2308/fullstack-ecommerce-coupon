const API_HOST = import.meta.env.VITE_API_HOST

const postReview = (data) => {

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/review/post`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${data.userToken}`
      },
      body: 
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post review'))
  })
}

export {
  postReview
}