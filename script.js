// Example structure: mapping multiple streams
const streams = {
    'MUXNEWS-NETWORK': 'http://rauxnet.serv00.net:8870/MUXNEWS-NETWORK',
    'MUXNEWS-JUAN': 'http://amptvradio.serv00.net:8870/MUXNEWS-JUAN'
};

const audioOutputs = {};

function playStream(streamKey) {
  if (audioOutputs[streamKey]) {
    audioOutputs[streamKey].play();
    return;
  }

  // Create new audio object
  const audio = new Audio(streams[streamKey]);
  audio.crossOrigin = "anonymous"; // Request CORS
  audioOutputs[streamKey] = audio;
  audio.play().catch(e => console.error("Playback failed:", e));
}

function stopStream(streamKey) {
  if (audioOutputs[streamKey]) {
    audioOutputs[streamKey].pause();
    audioOutputs[streamKey].src = ""; // Clear source to stop buffering
  }
}

// Example usage:
// playStream('radio1');
