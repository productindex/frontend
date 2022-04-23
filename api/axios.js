const axios = require('axios')

const createInstance = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const instance = axios.create({
      baseUrl: `${process.env.BACKEND_URL}`,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    instance.interceptors.response.use(resp => resp, 
      (error) => {
       const code = error.response.status 
       if (code == 403) {
        return instance.post('/auth/token')
       }
       return Promise.reject(error);
    })
    return instance

  }

}
export const authAxios = createInstance()
