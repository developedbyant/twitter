## Use the twitter api v1 using bearer token
### Start by importing the class TwitterSearch

``` javascript
import TwitterSearch from "@developedbyant/twitter"
```
Initialize the module (class) by creating a new TwitterSearch object and passing the bearer token.
``` javascript
const bearerToken = "your-bearer-token-from-twitter-api"
// IT'S REQUIRED TO PASS THE TWITTER API BEARER TOKEN
const twitterSearch = new TwitterSearch(bearerToken)
```
Inside a async function or if using top level await, you will have to await any function inside TwitterSearch.
All functions return false or api data, alway check to see if returned value is not false.

``` javascript
// GET USER JACK INFORMATION FROM TWITTER
const jackInfo = await twitterSearch.user("jack")
// CHECK TO SEE IF USER WAS FOUNDED (RETURNED DATA NOT FALSE)
if(jackInfo){
    console.log(jackInfo)
}
```

``` javascript
// GET USER JACK INFORMATION FROM TWITTER
const jackInfo = await twitterSearch.user("jack")
// GET USER JACK'S LASTED TWEETS
const tweets = await tweeterSearch.tweets('12',2)
// GET USER JACK'S LIST OF FOLLOWERS
const followersList = await tweeterSearch.followers('12',2)
// GET USER JACK'S LIST OF FOLLOWINGS
const followingsList = await tweeterSearch.followings('12',2)
// SEARCH TWITTER USING ANY SEARCH KEYWORDS
const search = await tweeterSearch.search('$TSLA',2)
// ALWAYS CHECK IF THE RETURNED VALUE IS NOT FALSE
if(jackInfo){
    console.log(jackInfo)
}
```