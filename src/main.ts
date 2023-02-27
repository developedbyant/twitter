import { $get } from "./utils.js"
import type { UserData } from "./types/user"
import type { TweetData } from "./types/tweet"
import type { FollowersData } from "./types/followersList"
import type { FollowingsData } from "./types/followingsList"
import type { SearchData } from "./types/search"

export default class TwitterApi{
    private token: string

    // Class constructor
    constructor(bearerToken:string){
        this.token = bearerToken.trim()
    }

    /** Get user information
     * @prop {string} username The username of the twitter user
     */
    async user(username:string){
        const apiUrl = `users/show.json?screen_name=${username}`
        const apiRes:UserData|false = await $get(this.token,apiUrl)
        return apiRes
    }

    /** Get user tweets
     * @prop {string} userID The user id from user object
     * @prop {number} count The number of tweets to get (max 100)
     * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
    */
    async tweets(userId:string,count:number=100){
        /** If count is set it will get replies and retweets and remove them after
         * So if count is 10 and there is 2 retweets and 3 replies you will get 5 tweets returned to you  */
        const apiUrl = `statuses/user_timeline.json?user_id=${userId}&count=${count}&exclude_replies=true&include_rts=false&trim_user=true`
        const apiRes:TweetData[]|false = await $get(this.token,apiUrl)
        return apiRes
    }

    /** Get user follower list
     * @prop {string} userID The user id from user object
     * @prop {number} count The number of followers to get (max 200)
     * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
    */
    async followers(userID:string,count:number=200){
        const apiUrl = `followers/list.json?user_id=${userID}&count=${count}&skip_status=true&include_user_entities=true`
        const apiRes:FollowersData|false = await $get(this.token,apiUrl)
        return apiRes
    }

    /** Get user following list
     * @prop {string} userID The user id from user object
     * @prop {number} count The number of followers to get (max 200)
     * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list
    */
    async following(userID:string,count:number=200){
        const apiUrl = `friends/list.json?user_id=${userID}&count=${count}&skip_status=true&include_user_entities=true`
        const apiRes:FollowingsData|false = await $get(this.token,apiUrl)
        return apiRes 
    }

    /** Search twitter using string
     * @prop {string} query The search term to search for
     * @prop {number} count The number of followers to get (max 200)
     * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets
    */
    async search(query:string,count:number=200){
        const apiUrl = `search/tweets.json?q=${query}&count=${count}&result_type=recent&include_rts=false&include_entities=true&lang=en`;
        const apiRes:SearchData|false = await $get(this.token,apiUrl)
        return apiRes
    }

}