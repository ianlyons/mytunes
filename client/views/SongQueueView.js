// SongQueueView.js - Defines a backbone view class for the song queue.
/* global Backbone, SongQueueEntryView */
/* exported SongQueueView */

var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    // Sets on app initialize
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(

      // Renders each song in SongQueue collection
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

    return this.$el;
  },


});
