// secrch API
const API_KEY = "AIzaSyAc2trh0eY8Fmagu2WTPvIASoEj_CQkDmM";

const BASE_URL = "https://www.googleapis.com/youtube/v3";


async function getComments(videoId,maxResults) {
    try {
      const response = await fetch(
        BASE_URL +
          "/commentThreads" +
          `?key=${API_KEY}` +
          `&videoId=${videoId}` +
          `&maxResults=${maxResults}&part=snippet`
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  getComments('8b0ubLO2MUE',10);