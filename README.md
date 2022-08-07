# shuffle-music-app.
## Local installation and setup.
1) Register a spotify app on your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as the Redirect URI in the app settings.

2) Create a `.env` file at the root of the project and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard.

3) Install dependencies
 ```shell
 npm install
 ```
4) Run the React app on <http://localhost:3000>

 ```shell
 npm start
 ```
5) Run the Node server on <http://localhost:8888>

```shell
nodemon server.js
```

## IMPORTANT NOTES
The following application uses the spotify web api and therefore will have access to the user's spotify data such as previously created playlists, liked albums, followed artists, top tracks and song search.

There is no functionality in this application which will alter the user's original spotify data. In order to experience the full functionality of the application, it is highly recommended that the user has a premium account in order to play the actual audio of the song.

Note that even without a premium account, the user can view all functionality the application has to offer except only playing of the audio.
