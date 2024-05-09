import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "GLDCg6Ei2eUavb_9c093YhjODr2b5veqZk9hZDNOupU";

const fetchPhotosByQuery = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: `${ACCESS_KEY}`,
    },
  });

  return data;
};
export default fetchPhotosByQuery;
