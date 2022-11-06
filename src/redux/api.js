import axios from 'axios';

//플리커
export const getFlickr = async (opt) => {
  const key = '4612601b324a2fe5a1f5f7402bf8d87a';
  const method_interest = "flickr.interestingness.getList";
  const method_search = "flickr.photos.search";
  const method_user = "flickr.people.getPhotos";
  const num = 21;
  let url = '';

  if (opt.type === 'interest') {
    url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
  }
  if (opt.type === 'search') {
    url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
  }
  if (opt.type === 'user') {
    url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
  }

  return await axios.get(url);
};


//유투브
export const getYoutube = async () => {
   const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
   const playlist = "PLcwo0_Iyc0sv6RPe5ZBKAKeLe6kBTN7bF";
   const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;


  return await axios.get(url);
}


//멤버스
export const getMembers = async () => {
  const url = process.env.PUBLIC_URL + '/DB/members.json';
  return await axios.get(url);
}

