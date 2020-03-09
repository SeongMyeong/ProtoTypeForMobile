const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/getAPI', async (req, res, next) => {
  let reqOptions = {
    method: 'GET',
    headers: {
      'X-Naver-Client-Id': 'mg6ly6rkZfg9ZZUMFKcn',
      'X-Naver-Client-Secret': 'q2CAm1qvUL',
    },
    qs: { query: 'avengers' },
  };

  let url = 'https://openapi.naver.com/v1/search/movie.json';

  function doRequest() {
    return new Promise(function(resolve, reject) {
      request(url, reqOptions, (err, res, result) => {
        let statusCode = res.statusCode ? res.statusCode : 400;
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
        //console.log(response)
      });
    });
  }

  let data = await doRequest();
  return res.send(data);
});

module.exports = router;
