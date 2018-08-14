var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
 
    this.videos = new Videos(exampleVideoData); // colection of video models
    // console.log(this.videos);
    this.list = new VideoListView(this.videos);
    //make sure load with this.list empty
    
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    
    new VideoPlayerView ({
      el: $(".player"),
    }).render();

    new VideoListView ({
      el: $(".list"),
      collection: this.videos
    }).render();

    // new VideoListEntryView ({
    //   el: $(".list")
    // }).render();
    
    new SearchView ({
      el: $('.search'),
    }).render();
  },
  template: templateURL('src/templates/app.html')
});
