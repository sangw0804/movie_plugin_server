const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');

const app = express();

app.use(cors({ origin: true }));

app.get('/movie_search', async (req, res) => {
  try {
    const { movie } = req.query;
    const { data } = await axios(
      `https://openapi.naver.com/v1/search/movie.json?query=${encodeURI(
        movie
      )}`,
      {
        headers: {
          'X-Naver-Client-Id': config.NAVER_API.CLIENT_ID,
          'X-Naver-Client-Secret': config.NAVER_API.CLIENT_SECRET
        }
      }
    );

    console.log(data.items);
    res.send(JSON.stringify(data.items));
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log('now listening at 3000');
});
