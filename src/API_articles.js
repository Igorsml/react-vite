// ID нашего блога https://vsesoki.ru/admin2/blogs/304569 (последние цифры)
const blogID = 304569;
const perPage = "?per_page=5";
const URL = `https://vsesoki.ru/admin/blogs/${blogID}/articles.json${perPage}`;

let newBlogContent = "";

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
  .then((articles) => {
    for (const article of articles) {
      if (article.content !== null && article.content.includes("iframe") && !article.content.includes("360.vsesoki.ru")) {
        newBlogContent = article.content.replaceAll(regex, '<div id="$1" class="youtube"></div>');

        fetch(`https://vsesoki.ru/admin/articles/${blogID}.json`, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(username + ":" + password)}`,
            "API-Usage-Limit": "1/500",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            article: {
              content: newFieldValue,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }

      newBlogContent = "";
    }
  });
