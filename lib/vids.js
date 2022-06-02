import videoData from '../data/videos.json';

export const getVidsFromApi = async (url) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  try {
    const BASE_URL = 'youtube.googleapis.com/youtube/v3';
    let apiURL = `https://${BASE_URL}/${url}&maxResults=25&key=${API_KEY}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data?.error) {
      console.error('YouTube API error: ', data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id?.channelId || item.id;

      return {
        title: item.snippet.title,
        imageUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (err) {
    console.error('Something went wrong fetching video API', err);
    return [];
  }
};

export const getVids = (query) => {
  const URL = `search?part=snippet&q=${query}`;

  return getVidsFromApi(URL);
};

export const getPopularVids = () => {
  const URL =
    'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US';

  return getVidsFromApi(URL);
};
