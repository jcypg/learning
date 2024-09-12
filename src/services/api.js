import axios from 'axios';
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Usa una variable separada para YouTube API
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYouTubeVideos = async (query) => {
  const params = {
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: 10, // Número de resultados
    key: YOUTUBE_API_KEY,
    relevanceLanguage: 'en', // Filtrar resultados en inglés
  };

  try {
    const response = await axios.get(YOUTUBE_API_URL, { params });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error.response ? error.response.data : error.message);
    return [];
  }
};
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        q: text,
        target: targetLang,
        key: GOOGLE_API_KEY,
      },
    });
    console.log(response)
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};

export const fetchLessons = async () => {
  try {
    const response = await axios.get(`${API_URL}/lessons`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error;
  }
};

