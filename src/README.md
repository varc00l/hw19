# React Image Search App

This is a simple React application that allows users to search for images using the Pixabay API. The application is built using functional components and hooks, providing a clean and modern user interface.

## Features

- Search for images using a search bar.
- Display images in a gallery format.
- Load more images with a button click.
- View larger images in a modal.
- Loading spinner while fetching images.

## Technologies Used

- React
- Hooks (useState, useEffect)
- Pixabay API
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/react-image-search-app.git
   ```

2. Navigate to the project directory:

   ```
   cd react-image-search-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Usage

1. Start the development server:

   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

### API Key

To use the Pixabay API, you need to sign up for an API key at [Pixabay](https://pixabay.com/api/docs/). Once you have your key, you can add it to the `src/api/pixabay.js` file.

## Components

- **App**: The main component that manages state and integrates all other components.
- **Searchbar**: A component for inputting search terms.
- **ImageGallery**: Displays a list of images.
- **ImageGalleryItem**: Represents a single image in the gallery.
- **Loader**: Shows a loading spinner while fetching images.
- **Button**: Loads more images when clicked.
- **Modal**: Displays a larger version of an image.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.