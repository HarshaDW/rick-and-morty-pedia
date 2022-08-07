const HTTP_METHOD = Object.freeze({
  GET: "GET",
  POST: "POST",
});

const API_BASE_URL = Object.freeze({
  R_M_BASE: "https://rickandmortyapi.com/api/",
});

const RM_API_ENDPOINT = Object.freeze({
  CHARACTER: "/character",
  LOCATION: "/location",
  EPISODE: "/episode",
});

export { HTTP_METHOD, API_BASE_URL, RM_API_ENDPOINT };
