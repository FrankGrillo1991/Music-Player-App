// JavaScript for Custom Music Player Controls
var audio = document.getElementById('audio-elements');
var playlistItems = document.querySelectorAll('#playlist li');
var tracks = [
    'path-to-your-first-song.mp3',
    'path-to-your-second-song.mp3',
    'path-to-your-third-song.mp3',
    // ...add more tracks here
];

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        updatePlayPauseButton(true);
    } else {
        audio.pause();
        updatePlayPauseButton(false);
    }
}

