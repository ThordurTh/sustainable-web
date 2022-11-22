import "../styles/news.scss";
import NewsCard from "./NewsCard";
function News(props) {
  return (
    <section className="news-section-wrapper">
      <h2>News</h2>
      {props.news.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </section>
  );
}

export default News;
