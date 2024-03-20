const username = process.env.REACT_APP_API_KEY;
const password = process.env.REACT_APP_API_KEY;

const limit = "?per_page=3";
const URL = `https://vsesoki.ru/admin/products.json${limit}`;

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
  .then((products) => {
    if (products.length > 0) {
      for (const product of products) {
        let URLbyID = "https://vsesoki.ru/admin/products.json";
        if (product.seo_description !== null) {
          newProductsEODescription = product.seo_description.replaceAll(attributes, "").replaceAll(regex, '<div id="$1" class="youtube"></div>');
          URLbyID = `${URLbyID}/${product.id}.json`;

          fetch(URLbyID, {
            method: "PUT",
            headers: {
              Authorization: `Basic ${btoa(username + ":" + password)}`,
              "API-Usage-Limit": "1/500",
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ product: { seo_description: newProductSEODescription } }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
          URLbyID = "";
          newProductSEODescription = "";

          URLbyID = "";
        }
      }
    }
  });
