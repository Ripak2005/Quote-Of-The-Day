document.addEventListener('DOMContentLoaded', async () => {
  try {
    const quoteElement = document.getElementById('quote');
    const quote = await fetchQuote();
    quoteElement.textContent = `${quote.content} - ${quote.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
});

async function fetchQuote() {
  const response = await fetch('https://api.quotable.io/random');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return { content: data.content, author: data.author }; // Return the full quote object
}