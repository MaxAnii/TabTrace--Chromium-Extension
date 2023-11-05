import { useState } from "react";
import "./App.css";

import ChromePromise from "chrome-promise/chrome-promise";
function App() {
  const [historyItems, setHistoryItems] = useState([]);
  const chrome = new ChromePromise();
  chrome.history
    .search({
      text: "",
    })
    .then((result) => {
      setHistoryItems(result);
    });

  return (
    <div className="m-2 ">
      {historyItems.map((item) => {
        const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=16`;
        return (
          <div
            key={item.id}
            className="hover:bg-[#ECE3CE] flex rounded-md p-3 "
          >
            <div className="pt-4 px-3">
              <img
                src={faviconUrl}
                alt={`Favicon of: ${item.url}`}
                width="16"
                height="16"
                loading="lazy"
              />
            </div>
            <div>
              <a href={item.url} target="_blank">
                <span>{item.title.slice(0, 75) + " ..."}</span>
                <br />
                <div href={item.url} target="_blank" className="text-gray-500">
                  {item.url.slice(7, 30)}
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
