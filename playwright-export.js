/* Auto generated Playwright test export. Please verify before adding to your test suite */

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch( {headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the webpage
  await page.goto('https://squareup.com/help/us/en');

  // Input text into the search box
  const searchSelectors = [
    'input.article-search-query.search-input.ui-autocomplete-input',
    '#welcome-search-query',
    "[placeholder='Search\\ questions\\,\\ keywords\\,\\ topics']",
    '.article-search-query.search-input.ui-autocomplete-input',
    'input',
    'div > :nth-child(1)'
  ];

  for (const selector of searchSelectors) {
    try {
      await page.fill(selector, 'marketplace');
      await page.press(selector, 'Enter');
      break;
    } catch (error) {
      console.log(`Failed to use selector: ${selector}, trying next...`);
    }
  }

  // Assert that there are more than 100 search results
  const searchResultsText = await page.textContent('text=Displaying 1 - 10 of');
  const searchResultsCount = parseInt(searchResultsText.match(/of (\d+) results/)[1]);
  if (searchResultsCount <= 100) {
    throw new Error('Search results are not more than 100');
  }

  // Click on the 'Community Answers' tab
  const communityAnswersSelectors = [
    'xpath=//a[normalize-space(.)="Community Answers"]',
    '#radio-tab-3',
    "text='Community Answers'",
    'a.search-results-tab.pad-vert-line',
    '.search-results-tab.pad-vert-line',
    "a[href='\\#']",
    "[href='\\#']",
    'li > :nth-child(1)',
    'a'
  ];

  for (const selector of communityAnswersSelectors) {
    try {
      await page.click(selector);
      break;
    } catch (error) {
      console.log(`Failed to use selector: ${selector}, trying next...`);
    }
  }

  // Assert that there are more than 100 results in the 'Community Answers' section
  const communityAnswersText = await page.textContent('text=Displaying 1 - 10 of');
  const communityAnswersCount = parseInt(communityAnswersText.match(/of (\d+) results/)[1]);
  if (communityAnswersCount <= 100) {
    throw new Error('Community Answers results are not more than 100');
  }

  console.log('Objective complete: The search functionality and "Community Answers" section have been verified.');

  await browser.close();
})();
