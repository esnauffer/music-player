# music-player-backend
This space will contain an example of a music player project. The project consist of an audio library/player with a backend and a front end parts. The backend will serve the library (list of songs with metadata), while the frontend will display the library and play the songs.

The backend should have at least one end point, e.g: /api/songs/GetAll - this endpoint will return a list of all songs with their metadata, something like: { source: 'path/to/mp3', title: 'title1', artist: [ 'artist1', 'artist2' ] }, { source: 'path/to/mp3', title: 'title2', artist: [ 'artist3' ] }

The backend API will retrieve the songs metadata from a JSON file stored in a directory in the backend (or a method to call an external API to get the songs metadata). 
