class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkReply(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`${res.status} ${res.statusText}`);
        }
    }

    getInitialCards(token) {
        const newUrl = this._baseUrl + '/cards';
        return fetch(newUrl, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          } ,
        }).then(this._checkReply);
    }

    getUserInfo(token) {
        const newUrl = this._baseUrl + '/users/me';
        return fetch(newUrl, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          },
        }).then(this._checkReply);
    }

    updateUserInfo({ name, about }) {
        const newUrl = this._baseUrl + '/users/me';
        return fetch(newUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, about }),
        }).then(this._checkReply);
    }

    addCards() {
        const newUrl = this._baseUrl + '/cards'
        return fetch(newUrl, {
            headers: this._headers
        })
            .then(this._checkReply);
    }

    addNewCard(data) {
        const newUrl = this._baseUrl + '/cards';
        return fetch(newUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._checkReply);
    }

    updateProfileAvatar({ avatar }) {
        const newUrl = this._baseUrl + `/users/me/avatar`;
        return fetch(newUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ avatar }),
        }).then(this._checkReply);
    }

    addCardLike(cardId) {
        const newUrl = this._baseUrl + `/cards/${cardId}/likes`;
        return fetch(newUrl, {
          method: 'PUT',
          headers: this._headers,
        }).then(this._checkReply);
    }

    deleteCardLike(cardId) {
        const newUrl = this._baseUrl + `/cards/${cardId}/likes`;
        return fetch(newUrl, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._checkReply);
    }

    setCardLike(cardId, checkLike) {
        const newUrl = this._baseUrl + `/cards/${cardId}/likes`;
        return fetch(newUrl, {
            method: checkLike ? 'DELETE' : 'PUT',
            headers: this._headers,
        }).then(this._checkReply);
    }

    

    deleteCard(cardId) {
        const newUrl = this._baseUrl + `/cards/${cardId}`;
        return fetch(newUrl, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._checkReply);
    }

    getPageData(){
        return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }

    // другие методы работы с API
}

const api = new Api({
    baseUrl: 'https://api.litvinovsl.nomoredomains.sbs',
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
    //   authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
});

// const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
//     headers: {
//       authorization: '6cbd57a7-9435-4249-951e-f8947dba9801',
//       'Content-Type': 'application/json'
//     }
// });

export default api;

