
const username = "d7c3a26e5cb8881dbac5dc86b266b736";
const password = "d59e673149e95d248ac7c5d281e74dc5";

const productID = 226463796;

const URL = `https://vsesoki.ru/admin/products/${productID}.json`;

let newFieldValue = "";

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});
const regex = /<iframe\s[^>]*src="(?:https?:)?\/\/www\.youtube\.com\/embed\/([^"?]+)\??.*?<\/iframe>/g;


fetch(URL, { headers: headers })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch JSON");
    }
  })
  .then((product) => {
      if (product.description !== null 
        && product.description.includes("iframe") 
        && !product.description.includes('evolveri') 
        && !product.description.includes('360.vsesoki.ru')) {

        newFieldValue = product.description.replaceAll(regex, '<div id="$1" class="youtube"></div>');

        fetch(`https://vsesoki.ru/admin/products/${productID}.json`, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(username + ":" + password)}`,
            "API-Usage-Limit": "1/500",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: {
              description: newFieldValue,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      
      newFieldValue = "";
  });

// fetch(URLbyID, {
//   method: "PUT",
//   headers: {
//     Authorization: `Basic ${btoa(username + ":" + password)}`,
//     "API-Usage-Limit": "1/500",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     product: {
//       product_field_values: [{ newFieldValue }],
//     },
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
