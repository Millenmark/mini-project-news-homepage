import CardArticle from "../components/CardArticle";
import { articles } from "../services/contents";

const Article = () => {
  return (
    <div>
      <h1 className=" text-primary-soft-orange text-4xl font-medium">New</h1>
      <div>
        {articles.map((article, index) => (
          <CardArticle key={index} title={article.title} body={article.body} />
        ))}
      </div>
    </div>
  );
};

export default Article;
