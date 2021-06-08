<<<<<<< HEAD
import 'aplayer/dist/APlayer.min.css';
import 'hls.js/dist/hls';
import APlayer from 'aplayer';


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'HLS',
        artist: 'artist',
        url: 'http://somafm.com/m3u/groovesalad256.m3u',
        cover: 'cover.jpg',
        type: 'customHls'
    }],
    customAudioType: {
        'customHls': function (audioElement, audio, player) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(audio.url);
                hls.attachMedia(audioElement);
            }
            else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
                audioElement.src = audio.url;
            }
            else {
                player.notice('Error: HLS is not supported.');
            }
        }
    }
});
console.log('Hello World from pageOne main file!');
=======
import 'aplayer/dist/APlayer.min.css';
import 'hls.js/dist/hls';
import APlayer from 'aplayer';


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'HLS',
        artist: 'artist',
        url: 'http://somafm.com/m3u/groovesalad256.m3u',
        cover: 'cover.jpg',
        type: 'customHls'
    }],
    customAudioType: {
        'customHls': function (audioElement, audio, player) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(audio.url);
                hls.attachMedia(audioElement);
            }
            else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
                audioElement.src = audio.url;
            }
            else {
                player.notice('Error: HLS is not supported.');
            }
        }
    }
});
console.log('Hello World from pageOne main file!');
>>>>>>> 637bd344d65ece722e2b3b3775a50990ba7613ba
