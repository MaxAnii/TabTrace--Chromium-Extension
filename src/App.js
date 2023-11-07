import { useEffect, useRef, useState } from "react";
import "./App.css";

import ChromePromise from "chrome-promise/chrome-promise";
function App() {
  const [historyItems, setHistoryItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchHistoryItems, setSearchHistoryItems] = useState("");
  const toggleSelect = useRef();
  const select = useRef([]);
  const [deleteHistoryItems, setDeleteHistoryItems] = useState([]);
  const chrome = new ChromePromise();
  let microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  let oneWeekAgo = new Date().getTime() - microsecondsPerWeek;

  chrome.history
    .search({
      text: "",
      startTime: oneWeekAgo,
    })
    .then((result) => {
      setHistoryItems(result);
      if (searchHistoryItems.length === 0) setFilteredData(result);
    });

  const setData = () => {
    if (searchHistoryItems.length !== 0) {
      setFilteredData(
        historyItems.filter(
          (elem) =>
            elem.title.includes(searchHistoryItems) ||
            elem.url.includes(searchHistoryItems)
        )
      );
    } else {
      setFilteredData(historyItems);
    }
  };
  const deleteHistory = () => {
    console.log(deleteHistoryItems);
    deleteHistoryItems.map((elem) => {
      chrome.history.deleteUrl({ url: elem }).then((result) => {
        if (chrome.runtime.lastError) {
          console.error(`Failed to delete URL: ${elem}`);
        } else {
          console.log(`Deleted URL: ${elem}`);
          setHistoryItems(result);
          setFilteredData([]);
          setDeleteHistoryItems([]);
          toggleSelect.current.checked = false;
        }
      });
    });
  };

  useEffect(() => {
    setData();
  }, [searchHistoryItems]);
  const addItemToDelete = (elem) => {
    setDeleteHistoryItems((prev) => [...prev, elem]);
  };
  const removeItemToDelete = (elem) => {
    deleteHistoryItems.pop(elem);
  };

  const checkboxvalue = (index) => {
    select.current.checked = select.current.checked ? false : true;
    if (select.current[index].checked) {
      addItemToDelete(select.current[index].value);
    } else {
      deleteHistoryItems.pop(select.current[index].value);
    }
  };

  const handaleSelectToggle = () => {
    setDeleteHistoryItems([]);
    for (let i = 0; i < filteredData.length; i++) {
      select.current[i].checked = toggleSelect.current.checked;
      if (select.current[i].checked) {
        addItemToDelete(select.current[i].value);
      } else {
        removeItemToDelete(select.current[i].value);
      }
    }
  };

  return (
    <div className="m-2 ">
      <input
        type="text"
        value={searchHistoryItems}
        onChange={(e) => setSearchHistoryItems(e.target.value)}
        className="ml-3 border-2  focus:border-orange-600 w-[430px] p-2 mb-2 rounded-md block"
      ></input>

      <input
        type="checkBox"
        onChange={handaleSelectToggle}
        ref={(element) => (toggleSelect.current = element)}
        className="ml-2"
      ></input>
      <span className="pl-2">select All</span>
      <button
        className="ml-[300px] p-1 border-2 rounded-lg text-center drop-shadow-xl "
        onClick={deleteHistory}
      >
        <span class="material-symbols-outlined">delete</span>
      </button>
      <div className="flex justify-end mt-2"></div>
      {filteredData.map((item, index) => {
        const lastVisitDate = new Date(item.lastVisitTime ?? 0);
        const date = lastVisitDate.toLocaleDateString();
        const time = lastVisitDate.toLocaleTimeString().slice(0, 5);
        const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=16`;
        return (
          <div
            key={item.id}
            className="hover:bg-[#ECE3CE] flex rounded-md p-3 "
          >
            <div>
              <input
                ref={(element) => {
                  select.current[index] = element;
                }}
                value={item.url}
                type="checkBox"
                onChange={() => checkboxvalue(index)}
              />
            </div>
            <div className="pt-4 px-3">
              <img
                src={faviconUrl}
                alt={`Favicon of: ${item.url}`}
                width="16"
                height="16"
                loading="lazy"
              />
            </div>
            <div className="w-[320px]">
              <a href={item.url} target="_blank">
                <span>{item.title.slice(0, 75) + " ..."}</span>
                <br />
                <div href={item.url} target="_blank" className="text-gray-500">
                  {item.url.slice(7, 30)}
                </div>
              </a>
            </div>
            <div className="ml-[50px] ">
              <div>{date}</div>
              <div className="text-center"> {time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
