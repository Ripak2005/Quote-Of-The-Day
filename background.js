chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message === 'getQuote') {
      const quote = await getQuote();
      sendResponse(quote);
    }
  });
  
  async function getQuote() {
    // Same logic as in popup.js
  }
  