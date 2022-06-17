import axios from 'axios'
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

const callApi = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  post: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  put: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.put(url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },


  delete: (url) => {
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export function apiRequest(url) {
        return new Promise((resolve,reject) => {
            callApi.get(url)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log("🚀 ~ file: util.js ~ line 19 ~ apiRequest ~ error", error);
                reject(error);
            });
        });
}