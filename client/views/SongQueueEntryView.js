// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
/* global _, Backbone */
/* exported SongQueueEntryView */

var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)<%= title %></td>' +
    '<td><a href="#" class="dequeue">remove</a></td>'),

  events: {
    'click .dequeue': function() {
      console.log('called dequeue');
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
