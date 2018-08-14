var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData); // colection of video models
    this.render();
  },
  
  render: function() {
    
    this.$el.html(this.template());

    new VideoPlayerView ({
      el: $(".player"),
      model: this.videos.at(0),
      collection: this.videos
    }).render();

    new VideoListView ({
      el: $(".list"),
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    
    new SearchView ({
      el: $('.search'),
      collection: this.videos
    }).render();

    return this;
  },
  template: templateURL('src/templates/app.html')
});
