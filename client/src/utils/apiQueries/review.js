const API_HOST = import.meta.env.VITE_API_HOST

const postReview = (data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/review/post`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${data.token}`
      },
      body: JSON.stringify(data.review)
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post review'))
  })
}

export {
  postReview
}