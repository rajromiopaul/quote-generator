let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://dummyjson.com/quotes/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        console.log(apiQuotes)
    } catch (error) {
        // Catch Error Here
    }
}

// On load
getQuotes()