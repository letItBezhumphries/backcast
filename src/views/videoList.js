var VideoListView = Backbone.View.extend({
  // events: {
  //   "click" : function(){
  //     this.select(this.$el, )
  //   }
  // },

  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render);
  },

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