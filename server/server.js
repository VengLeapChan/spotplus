const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")
// const lyricsFinder = require("lyrics-finder")
const lyricsFinder = require("@jeve/lyrics-finder");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '64b04011944d4c98877648eeef6721b4',
    clientSecret: '904ad09c82b6465e94ba01cc7740c04e'
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken

  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId:'64b04011944d4c98877648eeef6721b4',
    clientSecret: '904ad09c82b6465e94ba01cc7740c04e',
    refreshToken
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.get("/lyrics", async (req, res) => {
  const lyrics = await lyricsFinder.LyricsFinder('blinding lights');


  console.log(lyrics);

})


app.listen(3001)