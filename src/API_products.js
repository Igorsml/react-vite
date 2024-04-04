let count = 15;

while (count) {
  setInterval(() => {
    const limit = "?per_page=250";
    let page = 1;
    const since = "?updated_since=2021-01-01";
    const URL = `https://vsesoki.ru/admin/products.json${limit}&page=${page}`;
    // const URL = `https://vsesoki.ru/admin/products.json`;
    const field3D = 33741;
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
      .then((products) => {
        for (const product of products) {
          for (const field of product.product_field_values) {
            if (field.value !== null && field.value.includes("iframe") && !field.value.includes("evolveri") && !field.value.includes("360.vsesoki.ru")) {
              console.log("🚀 ~ .then ~ product:", product.id);
              newFieldValue = field.value.replaceAll(regex, '<div id="$1" class="youtube"></div>');
              console.log("🚀 ~ .then ~ field.value:", newFieldValue);
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
                .then((data) => data);
            }

            newFieldValue = "";
          }
          page++;
        }
      });
    console.log("---------page--------", page);
  }, 61000);

  count--;
}
