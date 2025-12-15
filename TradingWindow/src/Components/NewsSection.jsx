import { useEffect, useState } from "react";

import "./NewsSection.css";
import api from "../Utils/api";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // show 5 at a time

  useEffect(() => {
    api
      .get("/news")
      .then((res) => setNews(res.data))
      .catch(() => console.log("Error fetching news"));
  }, []);

  function loadMore() {
    setVisibleCount((prev) => prev + 5);
  }

  return (
    <div className="news-container">
      <h2>Market News</h2>

      <div className="news-list">
        {news.slice(0, visibleCount).map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="" className="news-img" />
            <div className="news-text">
              <h4>{item.headline}</h4>
              <p>{item.summary?.slice(0, 120)}...</p>
              <div className="news-meta">
                <span className="news-source">{item.source}</span>
                <span className="news-date">
                  {new Date(item.datetime * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < news.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
