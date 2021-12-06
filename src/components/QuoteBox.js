import { AiOutlineTwitter, RiDoubleQuotesR } from "react-icons/all";
import { useState, useEffect } from "react";

import quotes from "../assets/quotes.json";
import "./QuoteBox.css";

function QuoteBox() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    updateQuote();
  }, []);

  const updateQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="flex-column" id="quote-box">
      <RiDoubleQuotesR className="quote-icon" />
      <div className="flex-column centered" id="text">
        {quote && quote.quote}
      </div>
      <div id="author">- {quote && quote.author}</div>
      <div className="flex-row" id="buttons-container">
        <button id="new-quote" onClick={updateQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_top"
        >
          <AiOutlineTwitter className="quote-icon" />
        </a>
      </div>
    </div>
  );
}

export default QuoteBox;
