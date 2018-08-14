var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    
    new VideoPlayerView ({
      el: $(".player"),
    }).render();

    new VideoListEntryView ({
      el: $(".list"),
    }).render();
    
    new SearchView ({
      el: $('.search'),
    }).render();
  },
  template: templateURL('src/templates/app.html')
});
