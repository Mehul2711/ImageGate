# ImageGate - A Photo Search Application

**ImageGate** is a web application that allows users to search for photos using the [Pexels API](https://www.pexels.com/api/). It offers a simple user interface where users can log in, search for images by keyword, and view them in a responsive grid layout. The application also provides pagination to browse through multiple pages of results and features user authentication to personalize the experience.

## Features

- **User Authentication**: Users must sign up or log in to use the application.
- **Search Functionality**: Users can search for images using a keyword through the Pexels API.
- **Image Display**: Searched images are displayed in a responsive grid format.
- **Pagination**: Easily navigate through pages of image results.
- **Profile Management**: Displays the user's full name, with an option to log out.
- **Loading Spinner**: Shows a loading indicator while the application fetches data from the backend.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.
- **Animated Background**: A visually engaging animated background image.

## Tech Stack

- **Frontend**:
  - React (with Hooks)
  - Next.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for user authentication and storing user details)
  - JWT (for secure authentication)
- **API**: Pexels API (for fetching photos)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: >= 14.x
- **MongoDB**: Make sure MongoDB is installed and running locally or use a cloud MongoDB service (e.g., MongoDB Atlas)
- **Pexels API Key**: You'll need to sign up on [Pexels](https://www.pexels.com/api/) and get your API key.

