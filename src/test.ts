import TweeterApi from './main.js'
import { autoEnv } from "./utils.js"
// Auto load .env variables
autoEnv()

const bearerToken = process.env.TOKEN as string
const tweeterApi = new TweeterApi(bearerToken)

async function main(){
    // Get user information
    // const user = await tweeterApi.user("jack")

    // const followers = await tweeterApi.followers("12")

    // const following = await tweeterApi.following("12",2)

    const search = await tweeterApi.search("$TSLA",1)
    console.log(search)
}
main()