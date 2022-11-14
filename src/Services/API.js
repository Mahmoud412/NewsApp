import { BASE_URL,API_KEY } from "../config";


export const GET = async (url) =>{
    const API_URL = `${BASE_URL}${url}`

    let respone = await fetch(API_URL,{method:'GET'})
    respone = respone.json()
    return respone;
}