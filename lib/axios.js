
import Axios from "axios"

const axios = Axios.create({

    baseURL:"https://neweb.mailgemsroot.com",
    headers:{
        "X-Requested-With":"XMLHttpRequest"
    },
    withCredentials:true

});

export default axios;