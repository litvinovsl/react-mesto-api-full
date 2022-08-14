// const BASE_URL = "https://auth.nomoreparties.co";
const BASE_URL = "https://api.litvinovsl.nomoredomains.sbs";


function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    // console.log(res);
    return getResponse(res);
  });
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((res) => {
    return getResponse(res)
  })
}

export const validToken = (token) => {
  return fetch(`https://api.litvinovsl.nomoredomains.sbs/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    } 
  })
  .then((res) => {
    return getResponse(res)
  })
}

// export const validToken = (token) => {
//   return fetch(`https://auth.nomoreparties.co/users/me`, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization" : `Bearer ${token}`
//     } 
//   })
//   .then((res) => {
//     return getResponse(res)
//   })
// }