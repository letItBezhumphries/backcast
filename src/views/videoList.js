var VideoListView = Backbone.View.extend({
  
  initialize: function() {
  },
  
  render: function() {
    
    // new VideoListEntryView({
    //   el: $(this.template()),
    // }).render();

    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

/*
container view responsible for populating VideoListEntryView

array like collection of models
*/