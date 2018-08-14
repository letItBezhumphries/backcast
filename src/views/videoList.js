var VideoListView = Backbone.View.extend({


  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(video => {
      this.$el.children().append(new VideoListEntryView({model: video}).render().el);
    });
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')
  // template2: _.template('snippet')
});