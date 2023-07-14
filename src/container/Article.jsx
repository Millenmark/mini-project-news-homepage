import CardArticle from "../components/CardArticle";
import { articles } from "../services/contents";

const Article = () => {
  return (
    <div>
      <h1>New</h1>
      <div>
        {articles.map((article, index) => (
          <CardArticle key={index} title={article.title} body={article.body} />
        ))}
      </div>
    </div>
  );
};

export default Article;
