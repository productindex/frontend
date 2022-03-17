const axios = require('axios')

const createInstance = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    return axios.create({
      baseUrl: `${process.env.BACKEND_URL}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('prod_index_user_token')}`
      }
    })
  }

}
export const authAxios = createInstance()