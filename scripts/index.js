// URL of the website
const url = 'https://twice.fandom.com/wiki/TWICE';

// Fetch the content from the URL
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return response.text();
  })
  .then(html => {
    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Example: Extract the title of the page
    const title = doc.querySelector('.page-header__title').textContent;
    console.log(`Title: ${title}`);

    // Example: Extract the first paragraph in the main content
    const paragraph = doc.querySelector('.mw-parser-output p').textContent;
    console.log(`First paragraph: ${paragraph}`);
  })
  .catch(error => {
    console.error(`Error fetching data: ${error.message}`);
  });
