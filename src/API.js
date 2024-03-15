const username = process.env.API_KEY;
const password = process.env.API_PASS;

const URL = "https://vsesoki.ru/admin/collections.json";

const iframeStart = '<iframe src="https://www.youtube.com/embed/';
const iframeStartSlash = '<iframe src="//www.youtube.com/embed/';
const iframeEnd = "</iframe>";
const showInfo = "?rel=0&amp;showinfo=0";
const replaceStart = '<div id="';
const replaceEnd = '" class="youtube"></div>';
let collectionsIDs = [];

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});

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
        if (collection.seo_description !== null) {
          collectionsIDs.push(collection.id);
          collection.seo_description = collection.seo_description.replaceAll(iframeStart, replaceStart).replaceAll(showInfo, "").replaceAll(iframeEnd, replaceEnd).replaceAll(iframeStartSlash, replaceStart);
        }
      }

      for (const collectionId of collectionsIDs) {
        let URLbyID = "https://vsesoki.ru/admin/collections";
        URLbyID = `${URLbyID}/${collectionId}.json`;

        fetch(URL, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(username + ":" + password)}`,
            "API-Usage-Limit": "1/500",
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ seo_description: collections[collectionsIDs.indexOf(collectionId)].seo_description }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        URLbyID = "";
      }
    }
  });

// https://vsesoki.ru/admin/collections/7007200.json
