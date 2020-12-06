import Axios from "axios";

export const getData = async () => {
  try {
    const data = await Axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/milooproject"
    );
    return data.data.items;
  } catch (error) {
    return [];
  }
};
