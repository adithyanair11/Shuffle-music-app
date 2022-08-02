const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const app = express();


const CLIENT_ID = '3af44969d17340bb8bcd37790457c1f4';
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const FRONTEND_URI = process.env.FRONTEND_URI;
const scope = 'user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-library-read user-follow-read user-read-email user-read-private streaming';

app.use(express.static(path.resolve(__dirname, './shuffle/build')))

const generteRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0;i<length;i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
}

const stateKey = 'spotify_auth_state';


app.get('/login' , (req,res) => {
    const state = generteRandomString(16);
    res.cookie(stateKey,state);

    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        state: state,
        scope: scope
    });
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});


app.get('/callback', (req,res) => {
    const code = req.query.code || null;
    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
      }).then((response) => {
        if(response.status === 200){
            const {access_token,refresh_token,expires_in} = response.data;
            const queryParams = querystring.stringify({
                access_token,
                refresh_token,
                expires_in
            })
            res.redirect(`${FRONTEND_URI}?${queryParams}`)
            res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`)
        }else{
            res.redirect(`/?${querystring.stringify({error: 'invalid_token'})}`)
        }
      }).catch((err) => {
        res.send(err);
      })
});

app.get('/refresh_token', (req,res) => {
    const {refresh_token} = req.query;
    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
          grant_type: 'refresh_token',
          refresh_token: refresh_token
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
      }).then((response) => {
        if(response.status === 200){
            res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`)
        }else{
            res.send(response);
        }
      }).catch((err) => {
        res.send(err);
      })
})

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, './shuffle/build', 'index.html'));
});

app.listen(process.env.PORT || 8888);