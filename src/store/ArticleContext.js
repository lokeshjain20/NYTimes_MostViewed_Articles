import React, { useState } from "react";
import * as utils from "../utils";

export const ArticleContext = React.createContext({
  selectedArticleObj: null,
  articleImgUrl: "",
  articleClickHandler: (url) => {},
});

const ArticleContextProvider = (props) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [url, setUrl] = useState("");
  function articleClickHandler(obj) {
    setSelectedArticle(obj);
    const articleImageUrl = utils.getDetailedArticleImage(obj?.media);
    setUrl(articleImageUrl);
  }

  const contextValue = {
    selectedArticleObj: selectedArticle,
    articleImgUrl: url,
    articleClickHandler,
  };
  return (
    <ArticleContext.Provider value={contextValue}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
