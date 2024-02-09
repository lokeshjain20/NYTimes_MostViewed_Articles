import React, { useState } from "react";
import * as utils from "../utils";
import PropTypes from "prop-types";

export const ArticleContext = React.createContext({
  selectedArticleObj: null,
  articleImgUrl: "",
  articleClickHandler: () => {},
});

const ArticleContextProvider = ({ children }) => {
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
      {children}
    </ArticleContext.Provider>
  );
};

ArticleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticleContextProvider;
