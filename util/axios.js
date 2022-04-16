const axios = require('axios')
import Cookies from 'js-cookie'

const createInstance = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    return axios.create({
      baseUrl: `${process.env.BACKEND_URL}`,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

}
export const authAxios = createInstance()