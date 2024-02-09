import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import classes from "./ArticlesListContainer.module.css";
import * as constants from "../../constants";
import * as utils from "../../utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import { ArticleContext } from "../../store/ArticleContext";

const ArticlesListContainer = () => {
  const ctx = useContext(ArticleContext);
  const url = constants.NY_TIMES_API_URL;
  const apiKey = process.env.REACT_APP_NYTIMES_API_KEY;
  const [isLoading, articlesData] = useFetch(url, {
    ["api-key"]: apiKey,
  });
  const articlesList = articlesData?.results;
  const handleCardClick = (id, index) => {
    const selectedArticle = utils.getSelectedArticle(articlesList, id);
    ctx.articleClickHandler(selectedArticle);
  };
  return (
    <>
      {!isLoading && articlesList && articlesList.length > 0 ? (
        <ul className={classes.container}>
          {articlesList.map((articleObj, index) => {
            const { id, title, published_date, byline, media } = articleObj;
            const imgUrl = utils.getImageThumbUrl(media);
            return (
              <li>
                <ArticleCard
                  title={title}
                  date={published_date}
                  author={byline}
                  imgUrl={imgUrl}
                  id={id}
                  key={id}
                  cardClickHandler={handleCardClick}
                  index={index}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={classes.loading}>Loading....</div>
      )}
    </>
  );
};

export default ArticlesListContainer;
