const streams = {
    'MUXNEWS-NETWORK': 'http://rauxnet.serv00.net:8870/MUXNEWS-NETWORK',
    'MUXNEWS-JUAN': 'http://amptvradio.serv00.net:8870/MUXNEWS-JUAN'
};
// Map to HTTPS using a Proxy if needed for CORS/Mixed Content
const getSecureStream = (id) => `https://cmmnetcdn.github.io/raux-liveaudio/${streams[id]}`;
