import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 12,
    API: "AIzaSyBE2LdLKahl8Ywl1dt-qqIEizFwCOz9XK8",
  },
});

// const API = "AIzaSyBE2LdLKahl8Ywl1dt-qqIEizFwCOz9XK8";
// const channelID = "UC5X7iRFTg24q8X01_W42OGg";
// const result = 12;

// let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
