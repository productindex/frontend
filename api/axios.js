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
      async (error) => {
        const originalRequest = error.config; 
        const code = error.response.status 
        if (code == 401) {
          await instance.post(`${process.env.BACKEND_URL}/api/auth/token`)
          return instance(originalRequest)
        }
        return Promise.reject(error);
    })
    return instance

  }

}
export const authAxios = createInstance()
