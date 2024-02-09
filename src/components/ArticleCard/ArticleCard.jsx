import { useContext } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import classes from "./ArticleCard.module.css";
import { ArticleContext } from "../../store/ArticleContext";

const ArticleCard = ({
  id,
  title,
  imgUrl,
  author,
  date,
  index,
  cardClickHandler,
}) => {
  const ctx = useContext(ArticleContext);
  const classNames =
    ctx.selectedArticleObj?.id === id
      ? `${classes.card__selected} ${classes.card}`
      : classes.card;
  return (
    <div
      className={classNames}
      data-testid="article-card"
      onClick={() => cardClickHandler(id, index)}
    >
      <div className={classes.header}>
        <ImageComponent url={imgUrl} width={75} height={75} />

        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.info}>
        <span>{date}</span>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
