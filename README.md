````markdown
# NYTimes Articles App

## Overview

NYTimes Articles App is a React-based web application for fetching and displaying most viewed articles from the New York Times API.

## Installation

Clone the repository:

```bash
git clone https://github.com/lokeshjain20/NYTimes_MostViewed_Articles.git
cd nytimes-articles-app
```
````

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

- `npm run start`: Runs the development server.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run test`: Launches the test runner.
- `npm run eject`: Removes the single build dependency from your project.
- `npm test -- --coverage`: Runs Test coverage for entire application.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
