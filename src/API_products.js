const username = "d7c3a26e5cb8881dbac5dc86b266b736";
const password = "d59e673149e95d248ac7c5d281e74dc5";

const limit = "?per_page=5";
const URL = `https://vsesoki.ru/admin/products.json${limit}`;
// const URL = `https://vsesoki.ru/admin/products.json`;
const field3D = 33741;
let newFieldValue = "";

const headers = new Headers({
  method: "GET",
  Authorization: `Basic ${btoa(username + ":" + password)}`,
  "API-Usage-Limit": "1/500",
  "Content-Type": "application/json; charset=utf-8",
});

const regex = /<iframe\s+src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)[^>]*><\/iframe>/g;
const styleRegex = /style="[^"]*"/g;
const attributeRegex = /(?:width|height|frameborder|allow|allowfullscreen|loading)="[^"]*"\s?/g;


fetch(URL, { headers: headers })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch JSON");
    }
  })
  .then((products) => {
    for (const product of products) {
      for (const field of product.product_field_values) {
        if (field.id !== field3D && field.value !== null && field.value.includes("iframe")) {
          newFieldValue = field.value.replaceAll(regex, '<div id="$1" class="youtube"></div>');
          fetch(`https://vsesoki.ru/admin/products/${product.id}/product_field_values/${field.id}.json`, {
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
      }
  });