import "../styles/news.scss";
import NewsCard from "./NewsCard";
function News(props) {
  return (
    <div>
      <h2 className="news-header">News</h2>
      <section className="news-section-wrapper">
        {props.news.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </section>
    </div>
  );
}

export default News;
