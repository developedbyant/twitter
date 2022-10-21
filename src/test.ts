import TweeterApi from './main.js'
import { autoEnv } from "./utils.js"
// import { writeFileSync } from "fs"
// writeFileSync("type.json",JSON.stringify(apiRes,null,4))
// console.log(apiRes)
// Auto load .env variables
autoEnv()

const bearerToken = process.env.TOKEN as string
const tweeterApi = new TweeterApi(bearerToken)

async function main(){
    // Get user information
    // const user = await tweeterApi.user("jack")

    const tweets = await tweeterApi.tweets("12",1)
    console.log(tweets)

    // const followers = await tweeterApi.followers("12")

    // const following = await tweeterApi.following("12",2)

    // const search = await tweeterApi.search("$TSLA",1)
    // console.log(search)
}
main()