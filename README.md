# liri-node-app

This app can search for songs, artists' concerts, or movies using Node from your command terminal. 

## How to install it
Here is how you get started:
```
git clone git@github.com:ewgalassi/liri-node-app.git
cd liri-node-app
npm install
touch .env
node liri.js <command> <search item>
```
You will need to put your API keys in the `.env` file.

### How to use it
- `concert-this <artist name>` This will search for an artist and their upcoming concert.
- `spotify-this-song <search query>` This will give you information about the first match to the song you searched.
- `movie-this <movie name>` This will give you information about the closest match to the movie you searched.
- `do-what-it-says` - This will search according to the command and search item in the `random.txt` file.

### Log.txt
Your commands and the data you got back will be logged in `log.txt`.

### If you have any issues
Please contact me, I am regularly updating my projects.

### Languages and resources
This app uses JavaScript, Node.js, and API calls.
