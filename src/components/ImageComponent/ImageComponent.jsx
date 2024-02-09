import * as constants from "../../constants";
import classes from "./ImageComponent.module.css";

const ImageComponent = ({ url, width, height }) => {
  const imageUrl = url || constants.DEFAULT_PIC_URL;
  return (
    <div className={classes.imageContainer}>
      <img
        src={imageUrl}
        alt={"Image not available"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageComponent;
