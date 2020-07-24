const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')
var fs = require('fs')

const apikey = 'DZUDSQCg0Wk253TQGmqZA1sCh'
const apiSecretKey = 'rOP5yna8tbkgmRs97ggszj1pPESWrW2OmP0E88CAVWvqfjXVYo'
const accessToken = '859807567098380289-UMBLh9HQ2hxLIHJGslliKwFDc0i3DHU'
const accessTokenSecret = '6fAHAWyi4LDczB5RugfNIKwM8YraWzz5yBaRX8QkP3bdG'

// const apikey = (process.env.APIKEY)
// const apiSecretKey = (process.env.APISECRETKEY)
// const accessToken = (process.env.ACCESSTOKEN)
// const accessTokenSecret = (process.env.ACCESSTOKENSECRET)

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

module.exports= (async () => {

    // //1. GET RECENT TWEETS

T.get('search/tweets', { q: '#India #google since:2019-04-15', count:200 }, function(err, data, response) {

      const tweets = data.statuses
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      .map(tweet => tweet.text)
      .filter(tweet => tweet.toLowerCase().includes('google'));

      //const csv = tweets.toString();
      //console.log(tweets);
        const csv = tweets;
      fs.appendFile("all.csv",csv,function(err){
        if(err){
            console.log('error')
        }else{
            console.log('exported')
        }
    });

      console.log(csv);
      return csv;
    })
    var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
    T.get('search/tweets', { q: '#India #google since:2019-04-15', count:200, locations: sanFrancisco }, function(err, data, response) {

        const tweets = data.statuses
        // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
        .map(tweet => tweet.text)
        .filter(tweet => tweet.toLowerCase().includes('google'));
  
        //const csv = tweets.toString();
        //console.log(tweets);
          const csv = tweets;
        fs.appendFile("all.csv",csv,function(err){
          if(err){
              console.log('error')
          }else{
              console.log('exported')
          }
      });
  
        console.log(csv);
        return csv;
      })

    // //2. REAL TIME MONITORING USING STREAM (HASHTAG)
    // var stream = T.stream('statuses/filter', { track: '#tesla' })
    // stream.on('tweet', function (tweet) {
    //     console.log(tweet.text);
    //     console.log('Language: ' + franc(tweet.text));
    //     console.log('------');
    // })

    // 3. REAL TIME MONITORING USING STREAM (LOCATION)
    // var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
    // var stream = T.stream('statuses/filter', { locations: sanFrancisco })
    
    //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
    // stream.on('tweet', function (tweet) {
    //   console.log(tweet.text);
    //   let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

    //   notifier.notify({
    //     title: tweet.user.name,
    //     message: tweet.text
    //   });

    //   notifier.on('click', async function(notifierObject, options, event) {
    //     console.log('clicked');
    //     await open(url);
    //   });
    // })
})();