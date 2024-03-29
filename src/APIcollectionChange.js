const collectionID = 1831292;

const URL = `https://vsesoki.ru/admin/collections.json`;

const iframeStart = '<iframe src="https://www.youtube.com/embed/';
const iframeStartSlash = '<iframe src="//www.youtube.com/embed/';
const iframeEnd = "></iframe>";
const showInfo = "?rel=0&amp;showinfo=0";
const replaceStart = '<div id="';
const replaceEnd = ' class="youtube"></div>';

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});
const URLbyID = `https://vsesoki.ru/admin/collections/${collectionID}.json`;
let newCollectionSEODescription = "";
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
        if (collection.seo_description !== null && collection.id === collectionID) {
          newCollectionSEODescription = collection.seo_description.replaceAll(iframeStart, replaceStart).replaceAll(showInfo, "").replaceAll(iframeEnd, replaceEnd).replaceAll(iframeStartSlash, replaceStart);
        }

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
      }
    }
  });

// https://vsesoki.ru/admin/collections/1831292.json
