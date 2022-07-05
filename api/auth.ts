import { authAxios } from './axios';
import { ApiErrorMessage } from './errorMessages/apiErrorMessages';

interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export const Authentication = {
    getUserDetails: async (): Promise<ApiResponse> => {
        return authAxios({
            method: 'get',
            url: `${process.env.BACKEND_URL}/api/user`,
        }).then(({data}) => {
            return {success: true, data: data}
        }).catch((err) => {
            return {error: err.response?.data ? err.response.data.error : ApiErrorMessage.FailedFetchingUserDetails}
        })
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
            return {error: err.response?.data ? err.response.data.error : ApiErrorMessage.FailedLoggingDefault}
            
        });
    },
    register: async (user) : Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/auth/register`,
            data: {
                email_address: user.email_address,
                password: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
                dob: user.dob,
                state: user.state,
                city: user.city,
                country: user.country,
                primary_phone: user.primary_phone,
                gender: user.gender
            }
        }).then(()=> {
            localStorage.setItem('isLoggedIn', 'true')
            return {success: true}
        })
        .catch((err)=>  {
            return {error: err.response?.data ? err.response.data.error : ApiErrorMessage.FailedRegistering}
            
        });
    },
    logout: async () : Promise<ApiResponse>=> {
        return authAxios({
            method: 'delete',
            url: `${process.env.BACKEND_URL}/api/auth/logout`,
        }).then(({})=> {
            localStorage.removeItem('isLoggedIn')
            location.reload();
            return {success: true}
            
        }).catch(err => {
            return {error: err.response?.data ? err.response.data.error : ApiErrorMessage.FailedLoggedOut}
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
    },
    verify: (token) : Promise<ApiResponse> => {
        return authAxios({
            method: 'get',
            url: `${process.env.BACKEND_URL}/api/auth/verify?token=${token}`,
          }).then(()=> {
              return {success: true}

          })
          .catch((err)=>  {
            return {error: err.response.data.error}

          });
    }
}