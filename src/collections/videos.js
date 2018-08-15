var Videos = Backbone.Collection.extend({
  
  model: Video,

  initialize: function() {
    
  },

  fetch: function(query) {
    $.ajax({
      cache: false,
      data: {
        part: 'snippet', 
        q: query, 
        key: YOUTUBE_API_KEY,
        maxResults: 5,
      },
      dataType: 'json',
      type: 'GET',
      timeout: 500,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(data) {
        console.log('data fetched', data);

        const collection = new Videos(data.items);

        collection.forEach(fetchedVideo => {
          $('.video-list').append(new VideoListEntryView({model: fetchedVideo}).render().el);
        });
      },
      error: function(data) {
        console.error('failed to fetch data', data);
      }
    });
  }

});
