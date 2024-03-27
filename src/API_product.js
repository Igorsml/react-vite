
const field3D = 33741;
const productID = 428465567;

// const URL = `https://vsesoki.ru/admin/products/110763324.json`;
const URL = `https://vsesoki.ru/admin/products/428465567.json`;
// const URLbyID = `https://vsesoki.ru/admin/products/${productID}.json`;
const URLbyID = `https://vsesoki.ru/admin/products/${productID}/product_field_values/handle.json`;

const attributes = 'width="375" height="211" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen" loading="lazy"';
let newFieldValue = "";

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});
const regex = /<iframe\s+src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)[^>]*><\/iframe>/g;
// const regex = /<iframe(?:[^"']*["'][^"']*)*?\s+src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)[^>]*><\/iframe>/g;

fetch(URL, { headers: headers })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch JSON");
    }
  })
  .then((product) => {
    for (const productField of product.product_field_values) {
      if (productField.product_field_id !== field3D && productField.value !== null && productField.value.includes("iframe")) {
        newFieldValue = productField.value.replaceAll(regex, '<div id="$1" class="youtube"></div>');
        

        fetch(`https://vsesoki.ru/admin/products/${productID}/product_field_values/${productField.id}.json`, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(username + ":" + password)}`,
            "API-Usage-Limit": "1/500",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_field_value: {
              value: newFieldValue,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      
      newFieldValue = "";
    }
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
