import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://my-task-management-server-orpin.vercel.app"
})

const usePublicAxios = () =>{
    return axiosPublic;
}
export default usePublicAxios;