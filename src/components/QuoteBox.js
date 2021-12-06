import { AiOutlineTwitter, RiDoubleQuotesR } from "react-icons/all";
import "./QuoteBox.css";

function QuoteBox() {
  return (
    <div className="flex-column" id="quote-box">
      <RiDoubleQuotesR className="quote-icon" />
      <div className="flex-column centered" id="text">
        Лучше жопа в тепле, чем тепло в жопе.
      </div>
      <div id="author">- Темирлан Джолдошбеков</div>
      <div className="flex-row" id="buttons-container">
        <button id="new-quote">New Quote</button>
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
