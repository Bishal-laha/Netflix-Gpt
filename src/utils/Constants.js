export const CDN_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const CDN_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const MOVIE_CARD_IMG = "https://image.tmdb.org/t/p/w500";

export const MOVIE_API_NOW_PLAYING = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const SUPPORTED_LANG = [
  {identifier: "ENG", name: "English"},
  {identifier: "BEN", name: "Bengali"},
  {identifier: "HIN", name: "Hindi"},
];
