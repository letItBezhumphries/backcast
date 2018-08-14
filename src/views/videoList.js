var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));

    this.collection.forEach(video => {
      this.$el.children().append(new VideoListEntryView({model: video}).render().el);
    });
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});