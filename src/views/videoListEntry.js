var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this; //this is each created view video
  },

  template: templateURL('src/templates/videoListEntry.html')

});