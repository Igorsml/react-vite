const username = process.env.REACT_APP_API_KEY;
const password = process.env.REACT_APP_API_KEY;

const limit = "?per_page=33";
const URL = `https://vsesoki.ru/admin/collections.json${limit}`;

const iframeStart = '<iframe src="https://www.youtube.com/embed/';
const iframeStartSlash = '<iframe src="//www.youtube.com/embed/';
const iframeStartMt = '<iframe style="margin-top: 6px;" src="//www.youtube.com/embed/';
const iframeEnd = "></iframe>";
const showInfo = "?rel=0&amp;showinfo=0";
const replaceStart = '<div id="';
const replaceEnd = ' class="youtube"></div>';
const attributes = 'width="375" height="211" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen" loading="lazy"';
let collectionsIDs = [];
let newCollectionSEODescription = "";

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});
const regex = '/<iframe[^>]*src="https://www.youtube.com/embed/([A-Za-z0-9_-]+)"[^>]*></iframe>/';

fetch(URL, { headers: headers })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch JSON");
    }
  })
  .then((collections) => {
    if (collections.length > 0) {
      for (const collection of collections) {
        let URLbyID = "https://vsesoki.ru/admin/collections";
        if (collection.seo_description !== null) {
          newCollectionSEODescription = collection.seo_description.replaceAll(attributes, "").replaceAll(regex, '<div id="$1" class="youtube"></div>');
          URLbyID = `${URLbyID}/${collection.id}.json`;

          fetch(URLbyID, {
            method: "PUT",
            headers: {
              Authorization: `Basic ${btoa(username + ":" + password)}`,
              "API-Usage-Limit": "1/500",
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ collection: { seo_description: newCollectionSEODescription } }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
          URLbyID = "";
          newCollectionSEODescription = "";

          URLbyID = "";
        }
      }
    }
  });
