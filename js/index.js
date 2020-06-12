const URL = "http://localhost:3000/tweets";

const onEnter = (e) => {
    if (e.key == "Enter") {
        getTwitterData();
    }
}
/**
 * Retrive Twitter Data from API
 */
const getTwitterData = () => {
   const query = document.getElementById('user-search-input').value;
   if (!query) return;
   const encodeQuery = encodeURIComponent(query) //this help encode the #symbol coming in front of the query
   //console.log(query);
   //const url = "http://localhost:3000/tweets?q=coding&count=10";
   const fullURL = `${URL}?q=${encodeQuery}&count=10`;
   fetch(fullURL).then((response) => {
       return response.json();
   }).then((data) => {
       buildTweets(data.statuses);
   })
}


/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {
}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {
   let twitterContent = "";
   tweets.map((tweet) => {
       twitterContent += `
        <div class="tweet-container">
            <div class="tweet-user-info">
                <div class="tweet-user-profile" style="background-image: url(${tweet.user.profile_image_url_https})"></div>
                <div class="tweet-user-name-container">
                <div class="tweet-user-fullname">${tweet.user.name}</div>
                <div class="tweet-user-username">@${tweet.user.screen_name}</div>
            </div>
        </div>
       `
   })
   document.querySelector('.tweets-list').innerHTML = twitterContent;
}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {

}
