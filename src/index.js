import 'hls.js/dist/hls';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';


var ap = new APlayer({
    container: document.getElementById('player'),
    fixed: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    listFolded: false,
    music:[
    {
        title: 'Intro - intro',
        artist: 'Палево',
        url: 'http://somafm.com/m3u/groovesalad256.m3u8',
        cover: 'http://localhost:1313/%D0%B0%D0%BD%D0%BE%D0%BD%D1%81/%D1%80%D0%B5%D0%B4%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%80%D1%82-%D1%81%D1%83%D1%80%D0%BA%D0%BE%D0%B2-%D1%81%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D1%84%D1%84%D1%8B%D1%87-19-12-2021/featured_hud24cf12ba15de9a2d2ef0610045a08f6_1443726_720x0_resize_q90_lanczos.jpg'
    }],
});
const hls = new APlayer({
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
