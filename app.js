import axios from "axios"
export const getJokes=async(req,res)=>{
try{
    const response=await axios.get("https://api.chucknorris.io/jokes/random");
    const data=response.data;
    return data.value;

}catch(err){
    consolee.log(err.message)
    return "No Jokes";
}
}