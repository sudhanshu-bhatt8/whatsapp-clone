import axios from 'axios';
const url = "http://localhost:5000"
export const adduser = async (data) =>{
    try{
    await axios.post(`${url}/add` , data);
    }
    catch(error){
        console.log("error while adduser api " , error.message)
    }
}

export const getusers = async () =>{
    try{
        let res = await axios.get(`${url}/users`)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}