import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "GLDCg6Ei2eUavb_9c093YhjODr2b5veqZk9hZDNOupU";

const fetchPhotosByQuery = async (params) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      ...params,
    },
  });

  return data;
};
export default fetchPhotosByQuery;
