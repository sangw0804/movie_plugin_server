const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.get('/movie_search', async (req, res) => {
  try {
    const { movie } = req.query;
    const response = await fetch(
      `https://openapi.naver.com/v1/search/movie.json?query=${movie}`
    );

    const data = await response.json();

    console.log(data);
    res.send({ data: 1 });
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log('now listening at 3000');
});
