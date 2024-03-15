const username = process.env.API_KEY;
const password = process.env.API_PASS;

const limit = "?per_page=5";
const URL = `https://vsesoki.ru/admin/collections.json${limit}`;

const iframeStart = '<iframe src="https://www.youtube.com/embed/';
const iframeStartSlash = '<iframe src="//www.youtube.com/embed/';
const iframeStartMt = '<iframe style="margin-top: 6px;" src="//www.youtube.com/embed/';
const iframeEnd = "></iframe>";
const showInfo = "?rel=0&amp;showinfo=0";
const replaceStart = '<div id="';
const replaceEnd = ' class="youtube"></div>';
const attributes = 'width="375" height="211" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy">"';
let collectionsIDs = [];
let newCollectionSEODescription = "";

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
          newCollectionSEODescription = collection.seo_description.replaceAll(iframeStart, replaceStart).replaceAll(showInfo, "").replaceAll(attributes, "").replaceAll(iframeEnd, replaceEnd).replaceAll(iframeStartSlash, replaceStart).replaceAll(iframeStartMt, replaceStart);
        }
        console.log(newCollectionSEODescription);
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
        body: JSON.stringify({ collection: { seo_description: newCollectionSEODescription } }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      URLbyID = "";
    }
  });

// https://vsesoki.ru/admin/collections/7007200.json
