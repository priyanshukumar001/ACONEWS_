# ACONEWS

ACONEWS is a news website built using the gnews.io API. It features a NewsFeed as the default home page and allows users to select news by category, search for relevant news, and apply various filters. The categories include general, world, nation, business, technology, entertainment, sports, science, and health.

## Features

- **NewsFeed**: Displays the latest news articles.
- **Category Selection**: Users can select news from specific categories.
- **Search Functionality**: Users can search for news articles.
- **Filters**: Users can filter news by category, language, country, date range, and sort by most recent or relevant.

## Installation

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the frontend development server:
   ```bash
   npm start
   ```

## Directory Structure

## `/backend`

### `/api`

Contains routing modules for the backend:

- **newsRoute.js**: Handles news-related API routes.
- **paginationRoute.js**: Manages pagination for news articles.
- **searchRoute.js**: Manages search-related API routes.

### `/config`

Includes configuration files:

- **constant.js**: Manage constants.

### `/`

Contains frontend-related files and components:

### `/config`

- **fetchNews.js**: Functions for fetching news data.
- **formatDate.js**: Utility functions for formatting dates.
- **globalVariable.js**: Global variables used across the frontend.
- **ScrollToTop.js**: Component to scroll to the top of the page.

### `/public`

Contains public assets:

- **index.html**: The main HTML file.

### `/public/css`

Contains CSS files for styling:

- **Card.css**: Styles for the news card component.
- **CategoryBlocks.css**: Styles for category blocks.
- **common.css**: Common styles used across the application.
- **DetailedContents.css**: Styles for detailed news content.
- **Search.css**: Styles for the search component.

### `/src/components`

Contains React components:

- **BackButton.js**: Component for the back button.
- **Body.js**: Main body component.
- **Cards.js**: Component for displaying news cards.
- **Category.js**: Component for displaying categories.
- **DetailedContents.js**: Component for detailed news content.
- **ErrorPage.js**: Component for displaying error pages.
- **Navigation.js**: Navigation bar component.
- **NewsFeed.js**: Component for displaying the news feed.
- **Search.js**: Component for the search functionality.
- **SearchedResults.js**: Component for displaying search results.
- **App.js**: Main application component.
- **constants.js**: File containing constant values.

## Usage

1. **NewsFeed**: Visit the home page to see the latest news articles.
2. **Category Selection**: Use the category section to filter news by specific categories.
3. **Search**: Use the search bar to find relevant news articles.
4. **Filters**: Apply filters to narrow down the news articles based on your preferences.

## Hosting

The project is hosted on Firebase. Follow these steps to deploy:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize Firebase in your project directory:
   ```bash
   firebase init
   ```
4. Deploy the project:
   ```bash
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For any inquiries, please contact priyanshukashyap1709@gmail.com.
