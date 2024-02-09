export const getImageThumbUrl = (mediaArr) => {
  return mediaArr[0]?.["media-metadata"][0]?.url || "";
};

export const getDetailedArticleImage = (mediaArr) => {
  return mediaArr[0]?.["media-metadata"][2]?.url || "";
};

export const getSelectedArticle = (list, id) => {
  const selectedArticle = list.filter((obj) => obj.id === id);
  return selectedArticle ? selectedArticle[0] : null;
};
