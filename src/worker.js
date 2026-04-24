export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Map paths to actual Icecast stream URLs
    const streamMap = {
      '/MUXNEWS-NETWORK': 'http://rauxnet.serv00.net:8870/MUXNEWS-NETWORK',
      '/MUXNEWS-NETWORK_IC': 'http://rauxnet.serv00.net:8870/MUXNEWS-NETWORK_IC',
      '/MUXNEWS-JUAN': 'http://amptvradio.serv00.net:8870/MUXNEWS-JUAN',
      '/MUXNEWS-JUAN_IC': 'http://amptvradio.serv00.net:8870/MUXNEWS-JUAN_IC',
      '/RAUX_JUANFM': 'http://rauxnet.serv00.net:8910/RAUX_1STFM',
      '/RAUX_2DAYFM': 'http://rauxnet.serv00.net:8910/RAUX_2DAYFM',
      '/RAUX_HOTFM': 'http://rauxnet.serv00.net:8910/RAUX_HOTFM',
      '/RAUX_LYTEFM': 'http://rauxnet.serv00.net:8910/RAUX_LYTEFM',
      '/RAUX_HTZFM': 'http://rauxnet.serv00.net:8910/RAUX_HTZFM',
      '/RAUX_KIIXFM': 'http://rauxnet.serv00.net:8910/RAUX_KIIXFM',
      '/RAUX_NOUFM': 'http://rauxnet.serv00.net:8910/RAUX_NOUFM',
      '/24SN-NETWORK': 'http://amptvradio.serv00.net:8870/24SN-NETWORK',
      '/24SN-NETWORK_IC': 'http://amptvradio.serv00.net:8870/24SN-NETWORK_IC',
      '/MNX-NETWORK': 'http://amptvradio.serv00.net:8870/MNX-NETWORK',
      '/MNX-NETWORK_IC': 'http://amptvradio.serv00.net:8870/MNX-NETWORK_IC',
    };

    const targetUrl = streamMap[url.pathname];

    if (!targetUrl) {
      return new Response('Not Found', { status: 404 });
    }

    // Proxy the request
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
    });

    // Create a new response with CORS headers
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return newResponse;
  },
};
