import axios from 'axios'
import queryString from 'query-string'

const baseUrl = process.env.REACT_APP_API_URL

const apiGet = async (url, params) => {
  return axios.get(`${baseUrl}${url}?${queryString.stringify(params)}`)
    .then(response => ({ success: true, error: null, data: response.data })
    )
    .catch(response => ({ success: false, error: response, data: null })
    )
}

const apiPost = async (url, payload) => {
  return axios.post(`${baseUrl}${url}`, payload)
    .then(response => ({
      success: true,
      error: null,
      data: response.data
    }))
    .catch(response => ({ success: false, error: response.json, data: null })

    )
}

const api = {
  auth: {
    Login: async (payload) => apiPost('users', payload),
    Posts: async (payload) => apiGet('posts', payload),
    getPost: async (id, payload) => apiGet(`posts/${id}`, payload)
  }
}

export default api