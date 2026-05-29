# 💬 Quote Generator

A clean, minimalist random quote generator that fetches inspiring quotes and lets you share them directly to Twitter/X.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- **Random Quotes** — Fetches a new quote on every page load and button click
- **Author Attribution** — Displays the author alongside each quote
- **Tweet It** — One-click sharing to Twitter/X with quote and author pre-filled
- **Loading Spinner** — Smooth loading indicator while fetching from the API
- **Responsive Design** — Works on desktop and mobile screens

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Markup structure |
| CSS3 | Styling & animations |
| Vanilla JavaScript | Logic & API calls |
| [dummyjson.com/quotes](https://dummyjson.com/quotes) | Quotes API |
| Font Awesome 5 | Icons (quote mark, Twitter bird) |
| Google Fonts (Montserrat) | Typography |

## 🚀 Getting Started

No build tools or dependencies required — this is plain HTML/CSS/JS.

**Clone the repository:**

```bash
git clone https://github.com/rajromiopaul/quote-generator.git
cd quote-generator
```

**Open in your browser:**

```bash
# Simply open index.html directly
open index.html

# Or serve with any static file server, e.g.:
npx serve .
```

## 📁 Project Structure

```
quote-generator/
├── index.html      # Main HTML structure
├── style.css       # Styles, layout & animations
└── script.js       # Quote fetching & tweet logic
```

## 🔌 API

Quotes are fetched from the [DummyJSON Quotes API](https://dummyjson.com/quotes):

```
GET https://dummyjson.com/quotes/random
```

**Example response:**

```json
{
  "id": 3,
  "quote": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon"
}
```

## 📱 How It Works

1. On page load, `getQuote()` is called automatically.
2. A loading spinner displays while the API request is in flight.
3. Once the response arrives, the quote and author are rendered and the spinner is hidden.
4. Clicking **New Quote** triggers another API fetch.
5. Clicking the **Twitter icon** opens a pre-filled tweet with the current quote and author.

## 🙌 Contributing

Pull requests are welcome! Feel free to open an issue for bugs or feature suggestions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
