import axios from "axios";

let BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "100",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const dataFetcher = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
