function make_album(artist, title, tracks = 0) {
    return {artist: artist, title: title, tracks: tracks};
}

console.log(make_album("Atif Aslam", "Doorie"));

console.log(make_album("Rahat Fateh Ali Khan", "Back 2 Love", 10));

console.log(make_album("Eminem", "The Eminem Show", 15));