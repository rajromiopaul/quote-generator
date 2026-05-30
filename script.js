const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quotes From API
async function getQuote() {
    showLoadingSpinner()
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const quotesData = await response.json()
        console.log(quotesData)
        authorText.textContent = quotesData.author;
        quoteText.textContent = quotesData.quote;
        // Stop loader, show quote
        removeLoadingSpinner()
    } catch (error) {
        // Catch Error Here
    }
}

// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuote()
