// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
/* global _, Backbone */
/* exported LibraryEntryView */

var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="playSong">(<%= artist %>) - <%= title %></td>' +
    '<td><a href="#" class="addSong">Add song</a></td>'),

  events: {
    'click .playSong': function() {
      this.model.play();
    },
    'click .addSong': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
