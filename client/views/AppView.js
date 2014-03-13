// AppView.js - Defines a backbone view class for the whole music app.
/* global Backbone, PlayerView, LibraryView, SongQueueView */
/* exported AppView */

var AppView = Backbone.View.extend({

  initialize: function(params){
    var context = this;

    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.$el.on('ended', function() {
      context.model.set('currentSong', context.model.get('songQueue').at(0));
      context.model.get('songQueue').at(0).dequeue();
    });

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
