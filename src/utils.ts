import fetch from "node-fetch";
import { existsSync,readFileSync } from "fs"
const API_BASE = 'https://api.twitter.com/1.1/'
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
 
/** Make http get request */
export async function $get(token:string,url:string):Promise<false|any> {
    const headers={ 'Authorization':`Bearer ${token}`, "User-Agent":USER_AGENT }
    const apiReq = await fetch(API_BASE+url,{headers})
    if(apiReq.status!==200) return false
    const apiRes:any = await apiReq.json()
    if(apiRes.hasOwnProperty("error")) return false
    return apiRes 
}

/** Make http get request */
export async function $post(token:string,url:string):Promise<false|any> {
    const headers={ 'Authorization':`Bearer ${token}`, "User-Agent":USER_AGENT }
    const apiReq = await fetch(API_BASE+url,{headers})
    if(apiReq.status!==200) return false
    const apiRes:any = await apiReq.json()
    if(apiRes.hasOwnProperty("error")) return false
    return apiRes 
}

/** Console log error or ok */
export const $log = new class {
    error(string:string){ console.log(`\x1b[31m${string}\x1b[0m`) }
    ok(string:string){ console.log(`\x1b[32m${string}\x1b[0m`) }
}

/** Auto load .env variables */
export function autoEnv(){
    const CWD = process.cwd()
    const ENV_PATH = `${CWD}/.env`
    const envExists = existsSync(ENV_PATH)
    // Check if .env exists
    if(envExists){
        const envData = readFileSync(ENV_PATH).toString()
        for(let lineData of envData.split('\n')){
            lineData = lineData.trim()
            // Check if line is of comment
            if(!lineData.startsWith('#')){
                // Get key and value
                let [key, value] = lineData.split('=')
                // Clean key and value if needed
                if((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1,-1)
                process.env[key.trim()] = value.trim()
            }
        }
    }
}