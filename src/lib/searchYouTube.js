// var searchYouTube = (options, callback) => {
//   // TODO
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

// export default searchYouTube;

import YOUTUBE_API_KEY from '../config/youtube.js';

// var searchYouTube = ({key, query, max}, callback) => {

// var searchYouTube = ({key, query, max}, callback) => {
//   // TODO
//   $.ajax({
//     method: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search', // recast.ly prompt instructs us to send 'GET' request to url
//     part: 'snippet', // youtube documentation states `part:` is a REQUIRED parameter
//     key: key, // mocha test requires `key: YOUTUBE_API_KEY`
//     q: query, // mocha test requires `q: value`, value being the input from Search
//     maxResults: max, // mocha test requires `maxResults: value`, value set to 5 in test suit
//     type: 'video',
//     videoEmbeddable: 'true'
//   })

//   // jQuery documentation defines .done() and .fail()
//     // .done((data) => {
//     //   console.log(data);
//     //   if (callback) {
//     //     callback(data.items);
//     //   }
//     // })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       console.log('lol');
//       responseJSON.error.errors.forEach((err) => {
//         console.log(err);
//       });
//     });
// };

// var searchYouTube = (options, callback) => {
//   // TODO
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     key: options.key,
//     q: options.query,
//     maxResults: options.max || 5,
//     videoEmbeddable: true,
//     type: 'video',
//     part: 'snippet'
//   })
//     .done((obj) => {
//       if (callback) {
//         callback(obj.items);
//       }
//     })
//     .fail(({responseJSON}) =>{
//       responseJSON.error.errors.forEach((err) => console.error(err));
//     });
// };

var searchYouTube = ({key, q, max}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', { // recast.ly prompt instructs us to send 'GET' request to url
    part: 'snippet', // youtube documentation states `part:` is a REQUIRED parameter
    key: key, // mocha test requires `key: YOUTUBE_API_KEY`
    q: q, // mocha test requires `q: value`, value being the input from Search
    maxResults: max, // mocha test requires `maxResults: value`, value set to 5 in test suit
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done((data) => {
      if (callback) {
        callback(data.items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
