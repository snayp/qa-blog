+++
title = "Somafm"
subtitle = ""
summary = ""
description = ""
abstract = ""
date = 2021-06-05T19:31:24.000Z
draft = true
lastmod = 2021-06-05T19:33:30.579Z
tags = [ "API", "REST", "shortcodes", "блог", "онлайн", "somafm" ]
categories = [ "досуг", "музыка", "творчество" ]
publications = [ "музыка" ]
keywords = [ ]
authors = [ "snayp" ]

+++


<div class="artplayer-app" style="height: 200px;"></div>

<br/>

<script src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>
<link rel="stylesheet" href="/css/artplayer-plugin-playlist.css">
<script src="/js/artplayer-plugin-playlist.js"></script>
<script>
var art = new Artplayer({
    container: '.artplayer-app',
    url: 'http://ice6.somafm.com/groovesalad-256-mp3',
    title: 'One More Time One More Chance',
    volume: 0.5,
    isLive: true,
    muted: false,
    autoplay: true,
    pip: false,
    autoSize: true,
    autoMini: false,
    screenshot: false,
    setting: false,
    loop: true,
    flip: true,
    rotate: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: false,
    fullscreenWeb: false,
    subtitleOffset: true,
    miniProgressBar: true,
    localVideo: false,
    localSubtitle: false,
    networkMonitor: true,
    mutex: true,
    light: true,
    backdrop: true,
    theme: '#ffad00',
    lang: 'en',
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],
    layers: [
        {
            html: `<img style="width: 100px" src="/img/groovesalad-400.jpg">`,
            click: function () {
                console.info('You clicked on the custom layer');
            },
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px',
                opacity: '.9',
            },
        },
    ],
    highlight: [
        {
            time: 60,
            text: 'One more chance',
        },
        {
            time: 120,
            text: 'tetet',
        },
        {
            time: 180,
            text: 'tertr',
        },
        {
            time: 240,
            text: 'ertert',
        },
        {
            time: 300,
            text: 'ertert',
        },
    ],
    icons: {
        loading: '<img src="/img/LogoFP2010.gif">'
    },
    plugins: [
        artplayerPluginPlaylist([
            {
                title: 'SomaFM - Groove Salad',
                url: 'http://ice2.somafm.com/groovesalad-256-mp3',
            },
            {
                title: 'SomaFM - BeatBlender',
                url: 'http://ice6.somafm.com/beatblender-128-mp3',
            },
        ]),
    ],
});
art.on('hover', function() {
    art.plugins.artplayerPluginPlaylist.show();
    setTimeout(() => {
        art.plugins.artplayerPluginPlaylist.hide();
    }, 4000);
});
</script>
