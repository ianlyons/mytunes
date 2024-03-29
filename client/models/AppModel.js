// App.js - Defines a backbone model class for the whole app.
/* global Backbone, SongQueue, SongModel */
/* exported AppModel */

var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', undefined);
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // Register songQueue listener for enqueue
    // songQue
    params.library.on('enqueue', function(song) {
      if (this.get('currentSong') === undefined) {
        this.set('currentSong', song);
      } else {
        // Uses new SongModel to create copy of song
        // Allows for multiple queues of same song
        this.get('songQueue').push(new SongModel(song.attributes));
      }
    }, this);

    // Register songQueue listener for deqeue
    this.get('songQueue').on('dequeue', function(song) {
      console.log('AppModel dequeue');
      this.get('songQueue').shift();

    }, this);
  }
});
