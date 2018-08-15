var Videos = Backbone.Collection.extend({
  model: Video,

  initialize: function(){

  },

  fetch: function(query) {
    $.ajax({
      // cache: false,
      data: {
        part: 'snippet', 
        // order: viewCount,
        q: query, 
        // type: 'video',
        // videoDefinition: high,
        key: YOUTUBE_API_KEY,
        maxResults: 5,
      },
      dataType: 'json',
      type: 'GET',
      timeout: 500,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(data) {
        console.log('data fetched', data);
      },
      error: function(data) {
        console.error('failed to fetch data', data);
      }
    });
  }

});
