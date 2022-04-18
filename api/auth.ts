import { authAxios } from './axios';

interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export const Authentication = {
    getUserDetails: async (): Promise<ApiResponse> => {
        return authAxios({
            method: 'get',
            url: `${process.env.BACKEND_URL}/api/user/1`,
        }).then(({data}) => {
            return {success: true, data: data}
        }).catch((err) => {return {error: err.response.data.error}})
    },
    login: async (emailAddress, password) : Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/auth/login`,
            data: {
                email_address: emailAddress,
                password: password
            }
        }).then(()=> {
            localStorage.setItem('isLoggedIn', 'true')
            return {success: true}
        })
        .catch((err)=>  {
            return {error: err.response.data.error}
            
        });
    },
    register: async () => {

    },
    logout: async () : Promise<ApiResponse>=> {
        return authAxios({
            method: 'delete',
            url: `${process.env.BACKEND_URL}/api/auth/logout`,
        }).then(({})=> {
            localStorage.removeItem('isLoggedIn')
            location.reload();
            return {success: true, data: 'What this is?'}
            
        }).catch((err)=> {
            console.log(err.response.data.message)
        })
    },
    forgotPassword: (emailAddress) : Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/auth/forgot-password`,
            data: {
                email_address: emailAddress,
              }
          }).then(()=> {
              //TODO: Must send an email here
            return {success: true}
          })
          .catch(()=>  {
           return {success: true}

          });   
    },
    resetPassword: (token, password) : Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/auth/reset-password/${token}`,
            data: {
                password: password,
                password_confirm: password
              }
          }).then(()=> {
              return {success: true}

          })
          .catch((err)=>  {
            return {error: err.response.data.error}

          });
    }
}