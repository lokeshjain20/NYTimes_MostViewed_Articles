import ImageComponent from "../ImageComponent/ImageComponent";
import classes from "./ArticleCard.module.css";

const ArticleCard = ({ id, title, imgUrl, author, date, cardClickHandler }) => {
  return (
    <div
      className={classes.card}
      data-testid="article-card"
      onClick={() => cardClickHandler(id)}
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
