import { useEffect, useRef, useState } from "react";
import "./App.css";

import ChromePromise from "chrome-promise/chrome-promise";
function App() {
  const [historyItems, setHistoryItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchHistoryItems, setSearchHistoryItems] = useState("");
  const [deleteHistoryItems, setDeleteHistoryItems] = useState([]);
  const [message, setMessage] = useState("");
  const toggleSelect = useRef();
  const select = useRef([]);
  const chrome = new ChromePromise();
  const getData = () => {
    let microsecondsInThreeMonths = 1000 * 60 * 60 * 24 * 3 * 30;
    let ThreeMonthAgo = new Date().getTime() - microsecondsInThreeMonths;
    chrome.history
      .search({
        text: "",
        startTime: ThreeMonthAgo,
        maxResults: 100000000,
      })
      .then((result) => {
        setHistoryItems(result);
        if (searchHistoryItems.length === 0) setFilteredData(result);
      });
  };

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
    deleteHistoryItems.map((elem) => {
      chrome.history.deleteUrl({ url: elem }).then((result) => {
        if (chrome.runtime.lastError) {
          console.error(`Failed to delete URL: ${elem}`);
        } else {
          setFilteredData([]);
          setDeleteHistoryItems([]);
          toggleSelect.current.checked = false;
          getData();
        }
      });
    });
  };

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
  const topVistedHistory = () => {
    setSearchHistoryItems("");
    let copyHistoryItems = Array.from(historyItems);
    let topVisted = [];
    for (let i = 0; i < 10; i++) {
      let maxCount = -1;
      let maxCountIndex = -1;
      for (let j = 0; j < copyHistoryItems.length; j++) {
        if (copyHistoryItems[j].visitCount > maxCount) {
          maxCount = copyHistoryItems[j].visitCount;
          maxCountIndex = j;
        }
      }
      topVisted.push(copyHistoryItems[maxCountIndex]);
      copyHistoryItems.splice(maxCountIndex, 1);
    }
    setFilteredData(topVisted);
  };

  const allHistory = () => {
    setFilteredData(historyItems);
    setSearchHistoryItems("");
  };
  const setDisplayMessage = () => {
    if (filteredData.length === 0) {
      if (historyItems.length === 0) setMessage("Loading ...");
      else setMessage("No such history.");
    } else {
      setMessage("");
    }
  };
  useEffect(() => {
    console.log(filteredData.length, historyItems.length);
    setDisplayMessage();
  }, [filteredData.length, historyItems.length]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setData();
  }, [searchHistoryItems]);

  return (
    <div className="m-2 ">
      <input
        type="text"
        placeholder="Search for the history..."
        value={searchHistoryItems}
        onChange={(e) => setSearchHistoryItems(e.target.value)}
        className="ml-3 border-2  focus:border-orange-600 w-[470px] p-2 mb-2 rounded-md block"
      ></input>
      <h2 className="text-xl ">{`No. of results: ${filteredData.length}`}</h2>
      <input
        type="checkBox"
        onChange={handaleSelectToggle}
        ref={(element) => (toggleSelect.current = element)}
        className="ml-2"
      ></input>
      <span className="pl-2">select All</span>
      <button
        className="ml-[370px] p-1 border-2 rounded-lg text-center drop-shadow-xldrop-shadow-xl bg-slate-100 hover:translate-y-1"
        onClick={deleteHistory}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
      <div>
        <button
          onClick={allHistory}
          className="p-1 border-2 rounded-lg text-center drop-shadow-xl mr-2 bg-slate-100 hover:translate-y-1"
        >
          All history
        </button>
        <button
          onClick={topVistedHistory}
          className="p-1 border-2 rounded-lg text-center drop-shadow-xl bg-slate-100 hover:translate-y-1"
        >
          Top 10 visted sites
        </button>
      </div>
      <div className="flex justify-end mt-2"></div>

      {filteredData.length === 0 ? (
        <div className="text-3xl flex justify-center py-10">{message}</div>
      ) : (
        <>
          {" "}
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
                    <div
                      href={item.url}
                      target="_blank"
                      className="text-gray-500"
                    >
                      {item.url.slice(7, 30)}
                    </div>
                  </a>
                </div>
                <div className="ml-[50px] ">
                  <div>{date}</div>
                  <div className="text-center"> {time}</div>
                </div>
                <div className="ml-[50px] ">
                  <div className="text-center">visit Count</div>
                  <div className="text-center"> {item.visitCount}</div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
