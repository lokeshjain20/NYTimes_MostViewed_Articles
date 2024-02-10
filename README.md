# NYTimes Articles App

## Overview

NYTimes Articles App is a React-based web application for fetching and displaying most viewed articles from the New York Times API.

## Installation

Clone the repository:

```bash
git clone https://github.com/lokeshjain20/NYTimes_MostViewed_Articles.git
cd nytimes-articles-app
```

Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm start
```

This will start the application on your local machine. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

```bash
 `npm run start`: Runs the development server.
 `npm run build`: Builds the app for production to the `build` folder.
 `npm run test`: Launches the test runner.
 `npm run coverage`: Runs Test coverage for entire application.
 `npm run lint`: Runs ES lint check for the project.
 `npm run lint-fix`: Fix ES lint issue which can be fixed automatically.
 `npm run eject`: Removes the single build dependency from your project.
```

## Features

- Fetching Most Viewed Articles: The app fetches the most viewed articles from The New York Times API.

- Displaying Article List: Users can view a list of most viewed articles, including titles, authors, and publication dates.

- Article Details: Users can click on individual articles to view more details, including a summary and a link to read the full article.

- Error Handling: The app includes error handling to display a friendly message if there are any issues fetching or displaying articles.

## Details

The NYTIMES ARTICLES uses React library for building user interface, it is a single page application, and fetches articles by rest api to NY times developer's api. The api call is made right after application is loaded using useEffect hook of React and axios. The page is divided in two sections i.e. left side of page will show list of articles in card format, which will display followig info regarding the article:

- Title
- Thumbnail Image of Article
- Date of Article
- Author Name of Article
  The right side of article will display a text on initial render which reads:
  `Please select an article to view details`
  On Click of any card on left side, the right side will display following details :
- large Image
- Title
- description of article
- read more link which on click will redirect user to nytimes website for complete details of the article

## Error Handling

The NYTIMES ARTICLES app handles following ways to handle different errors:

- Article without Image - If we fetch an article without image then default image of NY times logo will be shown
- Error Boundary - The app is wrapped with Error boundary component which will gracefully exit the app if any error is caught at runtime or during rendering of components or if api returns with error response.

## Technologies Used

- React: The front-end of the application is built using React, a popular JavaScript library for building user interfaces.

- Axios: Axios is used to make HTTP requests to The New York Times API to fetch articles.

- CSS Modules: CSS Modules are used for styling components, providing scoped styles and avoiding naming conflicts.

## Design Patterns Used

1. Custom Hook for Data Fetching
   - Description: The application utilizes a custom hook for fetching data from external APIs. This hook encapsulates the logic for making HTTP requests, handling loading states, and error handling, providing a reusable and composable solution for data fetching across different components.

- Implementation: The custom hook, named useFetch, abstracts away the details of making HTTP requests using libraries like Axios. It manages the loading state while the request is pending and handles errors gracefully. By abstracting away this logic into a custom hook, it promotes code reusability and separation of concerns.

2. Context for State Management
   - Description: Context is used for managing global state across the application. It allows sharing data between components without the need to pass props manually through each level of the component tree. In this application, context is used to manage the selected article state and provide it to components that need access to it.

- Implementation: The ArticleContext provides a centralized place for managing the selected article state. The ArticleContextProvider component wraps the application and exposes methods for updating the selected article state. Components consuming the context can access and update the selected article state without directly prop drilling through intermediate components.

3. Error Boundary for Error Handling
   - Description: An error boundary component is used to catch errors that occur during the rendering of React components. It prevents the entire application from crashing when an error occurs in a component subtree, providing a fallback UI and logging errors for further investigation.

- Implementation: The ErrorBoundary component wraps the main application component, App, and catches errors that occur during rendering. If an error occurs within its child components, it displays a friendly error message instead of crashing the entire application. Additionally, it can log errors to a service for monitoring and debugging purposes.

4. Container Presentation Pattern
   - Description: The application follows the container presentation pattern to separate concerns between container components responsible for data fetching and presentation components responsible for rendering UI elements.

- Implementation: Components like ArticlesListContainer act as containers that are responsible for fetching data using custom hooks like useFetch and managing the application state using context. Presentation components, such as ArticleCard and ArticleDetails, are responsible for rendering UI elements based on the data provided by the container components. This separation of concerns promotes code maintainability and reusability by keeping business logic separate from UI rendering logic.

## Architecture Design Diagram

```bash
       +-------------------+
       |      App.js       |
       +-------------------+
                 |
         (API Call to NYTimes Server)
                 |
     +-----------+-----------+
     |                       |

+-----------+ +------------+
| ArticlesList | | ArticleDetails |
| Container | | |
+-----------+ +------------+
| |
+-----------+ |
| ArticleCard | |
| | |
+-----------+ |
| |
+-----------+ |
| ErrorBoundary| |
+-----------+ |
```

- App.js: The main component rendering the entire application.
- ArticlesListContainer: Container component responsible for fetching most viewed articles and passing them to presentation components.
- ArticleDetails: Presentation component displaying details of a selected article.
- ArticleCard: Presentation component rendering individual article cards.
- ErrorBoundary: Error boundary component to catch errors in the component tree.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
