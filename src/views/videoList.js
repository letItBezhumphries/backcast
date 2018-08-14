var VideoListView = Backbone.View.extend({
  // tagName: 'div'
   
  initialize: function() {
    


    this.render(); //calls render method and you enter the render function
  },
  
  render: function() {
    
    // new VideoListEntryView({
    //   el: $(this.template()),
    // }).render();
    this.$el.children().detach();
    this.$el.html(this.template());
    // for(var i = 0; i < this.collection.length; i++) {
    //   var video = this.collection[i];
    //   $(this.video).appendTo('div'); 
    // }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

/*
container view responsible for populating VideoListEntryView

array like collection of models
*/