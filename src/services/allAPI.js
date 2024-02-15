import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverURL";

//register api
export const registerAPI=async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
}
//getallstudentdetails
export const getallstudentdetailsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/getallstudentdetails`,"","")
}