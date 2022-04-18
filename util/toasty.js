import { toast } from 'react-toastify';
export const toasty = (type, message) => {
    return toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}