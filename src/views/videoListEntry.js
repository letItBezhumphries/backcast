var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

//create a callCount property

//event click listener for title
//target el class ("video-list-entry-title")