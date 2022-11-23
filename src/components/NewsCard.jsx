import React from "react";
import "../styles/news.scss";
function NewsCard(props) {
  return (
    <article className="news-card">
      <img src={props.images} alt={props.headline} />
      <h3>{props.headline}</h3>
      <p>{props.copytext}</p>
    </article>
  );
}

// "id": 4,
// "headline": "NEWS THAT SHOCKED THE NATION",
// "copytext": "Snow, real or fake? Company Y admits to controlling the weather!",
// "images": null

export default NewsCard;
