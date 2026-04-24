// Mapping internal paths to Icecast stream URLs
const streamMap = {
    '/rock': 'http://server.url:8000/rock.mp3',
    '/jazz': 'http://server.url:8000/jazz.mp3',
    '/pop': 'http://server.url:8000/pop.mp3'
};

function playStream(path) {
    const audioPlayer = document.getElementById('audio-player');
    const source = document.getElementById('audio-source');
    
    if (streamMap[path]) {
        source.src = streamMap[path];
        audioPlayer.load();
        audioPlayer.play();
        console.log(`Playing: ${path} from ${streamMap[path]}`);
    } else {
        console.error('Stream not found');
    }
}
