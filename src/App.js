import React from "react";
import "./App.css";
import ArticlesListContainer from "./components/ArticlesList/ArticlesListContainer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import ArticleContextProvider from "./store/ArticleContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        Welcome to NY Times Most Viewed Articles :
        <ArticleContextProvider>
          <div className="mainContainer">
            <ArticlesListContainer />
            <ArticleDetails />
          </div>
        </ArticleContextProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
