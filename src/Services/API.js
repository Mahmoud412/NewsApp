import { BASE_URL_TOPHEADLINE,API_KEY } from "../config";


export const GET = async (url) =>{
    const API_URL = `${BASE_URL_TOPHEADLINE}${url}&api_key='389c3dcdddda4256b23ee60a0a896607r'`

    let respone = await fetch(API_URL,{method:'GET'})
    respone = respone.json()
    return respone;
}