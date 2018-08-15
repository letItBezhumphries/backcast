var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function() {
    let input = $(".form-control").val();
    this.collection.fetch(input);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
