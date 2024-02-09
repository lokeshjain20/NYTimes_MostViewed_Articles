import { useContext } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import classes from "./ArticleDetails.module.css";
import { ArticleContext } from "../../store/ArticleContext";

const ArticleDetails = () => {
  const ctx = useContext(ArticleContext);
  const articleObj = ctx.selectedArticleObj || null;
  console.log("articles obj is", articleObj, ctx);
  const detailsView = articleObj ? (
    <div className={classes.detailsContainer}>
      <ImageComponent url={ctx.articleImgUrl} width={440} height={293} />
      <div className={classes.title}>{articleObj.title}</div>
      <div className={classes.description}>{articleObj.abstract}</div>
      <div className={classes.link}>
        <a href={articleObj.url} target="_blank">
          Read more...
        </a>
      </div>
    </div>
  ) : (
    <div className={classes.defaultMsg}>
      Please select an article to view details
    </div>
  );
  return <>{detailsView}</>;
};

export default ArticleDetails;
