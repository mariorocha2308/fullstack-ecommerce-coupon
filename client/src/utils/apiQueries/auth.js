const API_HOST = import.meta.env.VITE_API_HOST

const postLoginUser = (input) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers:{'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post user login'))
  })
}

const postRegisterUser = (input) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers:{'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post user register'))
  })
}

export {
  postLoginUser,
  postRegisterUser
}