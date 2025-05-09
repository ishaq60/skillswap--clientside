import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://skillswap-serverside.vercel.app'
   
  })

const UseAxiosPublic = () => {
    return  axiosPublic
};

export default UseAxiosPublic;