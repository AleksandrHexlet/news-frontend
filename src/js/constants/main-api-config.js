/* eslint  no-undef: 0 */

const MAIN_API_URL =
  NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.news-today.site";

export default MAIN_API_URL;
