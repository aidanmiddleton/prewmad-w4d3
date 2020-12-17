let library = {

    songs: { s01: { id: "s01",
                     name: "Money",
                     artist: "Pink Floyd",
                     album: "Dark Side of the Moon" },
              s02: { id: "s02",
                     name: "Blessings",
                     artist: "Chance, The Rapper",
                     album: "Colouring Book"},
              s03: { id: "s03",
                     name: "Purple Haze",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
              s04: { id: "s04",
                     name: "Little Wing",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
            },
  
  
    playlists: { p01: { id: "p01",
                        name: "Coding Jamz",
                        tracks: ["s01", "s03"]
                      },
                 p02: { id: "p02",
                        name: "Music to cry to",
                        tracks: ["s02"]
                      }
               },

       generateUid: function() {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },        
               
               
       getSongNameByID: function(id) {
              return library.songs[id].name
       },

       getAllSongNames: function() {
              let songIds = Object.keys(library.songs);
              let resultArray = []
              for (i = 0; i < songIds.length; i++) {
                     resultArray.push(library.songs[songIds[i]].name)
              }
              return resultArray;
       },
       
       getPlaylistNameByID: function(playlistID) {
              return library.playlists[playlistID].name
       },
       
       getAllPlaylistNames: function () {
              let playlistIds = Object.keys(library.playlists);
              let resultArray = [];
              for (i = 0; i < playlistIds.length; i++) {
                     resultArray.push(library.playlists[playlistIds[i]].name)
              }

              return resultArray;
       },

       getPlaylistSongs: function(playlistID) {
              let songIDs = library.playlists[playlistID].tracks;
              let resultArray = [];
              for(i = 0; i < songIDs.length; i++) {
                     resultArray.push(library.getSongNameByID(songIDs[i]));
              }

              return  `The songs in playlist ${library.getPlaylistNameByID(playlistID)}: ${resultArray}`;
       },


       addSong: function(songName, songArtist, songAlbum) {
              let randomID = library.generateUid();
              let newSong = {
                     id: randomID,
                     name: songName,
                     artist:songArtist,
                     album: songAlbum,
              }
              library.songs[randomID] = newSong;

              console.log(library.getAllSongNames())

       },

       addSongToPlaylist: function(songID, playlistID) {
              console.log(library.getPlaylistSongs(playlistID))
              library.playlists[playlistID].tracks.push(songID);
              console.log(library.getPlaylistSongs(playlistID))
       }, 

       addPlaylist: function(playlistName, arrOfSongs) {
              let randomID = library.generateUid();   
              let newPlaylist = {
                     id: randomID,
                     name: playlistName,
                     tracks: arrOfSongs
              }
              library.playlists[randomID] = newPlaylist;
       }
                
}  



// Object.keys(library)
// [songs, playlists]
// Object.keys(library.songs)
//[s01, s02, s03, s04]
// Object.keys(libray.songs.s01)
// [id, name, artist, album]




// console.log(library.songs.s03.name);
//console.log() the name of the third song on the songlist
// console.log(library.songs.s01.artist);
//console.log() the artist of the first track in the song list
// console.log(library.playlists.p01);
//console.log() the entire p01 object
// console.log(Object.keys(library.songs))
//consoel.log(the list of song IDs)

//add a song, and confirm that it was added by console logging it a second time. 
// library.songs["s05"] = {
//        id: "s05",
//        name: "Good News",
//        artist: "Mac Miller",
//        album: 'Circles',
// }

// console.log(library.songs)

// console.log(library.getSongNameByID('s03'));

// console.log(library.getPlaylistNameByID('p01'));

// console.log(library.getAllSongNames());
// console.log(library.getAllPlaylistNames());
// console.log(library.getPlaylistSongs('p01'));
// console.log(library.addSong("September", "Earth, Wind, and Fire", "album"));
// console.log(library.songs)
// library.addSongToPlaylist("my playlist", ["s02", "s03"]);
// console.log(library.getAllSongNames())

// library.addSongToPlaylist('s04', 'p02');
console.log(library.getAllPlaylistNames());
library.addPlaylist('My playlist', ['s01', 's02', 's03']);
console.log(library.getAllPlaylistNames());