const API_KEY = '46176149-d612357420c4c85e178582eee';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchTerm, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchTerm,
        page: page,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error);
    throw error;
  }
};