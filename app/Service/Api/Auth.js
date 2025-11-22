import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const FreeApiForAuth = {

    register: async (userData)=>{
        try {


            const response = await Api.post("/register", userData)
            console.log('test : ' , userData)

            .then((res)=>{
                return res;
            })
            .catch((error)=>{ console.log(error)})


            console.log("test For Api : " , response)
            return response;


        } catch (error) {
            console.log('this error from Auth.js freeapi register' , error)
        }
    }

}