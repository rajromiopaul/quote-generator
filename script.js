const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quotes From API
async function getQuote() {
    const apiUrl = 'https://dummyjson.com/quotes/random';
    try {
        const response = await fetch(apiUrl);
        const quotesData = await response.json()
        console.log(quotesData)
        authorText.textContent = quotesData.author;
        quoteText.textContent = quotesData.quote;

    } catch (error) {
        // Catch Error Here
    }
}

// Tweet quote
function twittQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', twittQuote)

// On load
getQuote()