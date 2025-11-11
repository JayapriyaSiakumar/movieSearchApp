# 🎬 Movie Search App

A modern, responsive web application built with React that allows users to search for movies and view detailed information about them. This app fetches movie data from the OMDB API and provides an intuitive user interface with real-time search functionality.

## 🌟 Features

- **Movie Search**: Search for movies by title with instant results
- **Detailed Movie Information**: View comprehensive details about each movie including plot, cast, ratings, and more
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Fast Performance**: Optimized with Vite for quick development and production builds
- **Smooth Navigation**: Navigate between search results and detailed movie pages seamlessly
- **Loading States**: Visual loading indicators with spinners while fetching data
- **Error Handling**: Graceful handling of page not found and error scenarios

## 🛠️ Tech Stack

- **React** (v19.1.1) - UI library
- **React Router DOM** (v7.9.5) - Client-side routing
- **Vite** (v7.1.7) - Build tool and dev server
- **Tailwind CSS** (v4.1.17) - Utility-first CSS framework
- **Axios** (v1.13.2) - HTTP client for API requests
- **React Icons** (v5.5.0) - Icon library
- **React Spinners** (v0.17.0) - Loading spinners

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**
- **Git**

## 🚀 Installation & Setup

### Option 1: Clone from GitHub

```bash
# Clone the repository
git clone https://github.com/JayapriyaSiakumar/movieSearchApp.git

# Navigate to the project directory
cd movieSearchApp

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Option 2: Download ZIP

1. Go to the GitHub repository
2. Click on **Code** button
3. Select **Download ZIP**
4. Extract the ZIP file
5. Open terminal in the extracted folder
6. Run:
   ```bash
   npm install
   npm run dev
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (if needed for API keys):

```env
VITE_OMDB_API_KEY=your_api_key_here
```

To get an OMDB API key, visit [OMDB API](http://www.omdbapi.com/apikey.aspx)

## 📁 Project Structure

```
movieSearchApp/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── Pages/
│   │   ├── Search.jsx
│   │   ├── MovieDetails.jsx
│   │   └── PageNotFound.jsx
│   ├── Context/
│   │   └── SearchProvider.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎯 How to Use

1. **Search for Movies**: Enter a movie title in the search bar on the homepage
2. **View Results**: Browse through the search results displayed on the page
3. **View Details**: Click on any movie to see detailed information
4. **Navigate**: Use the back button or navigation to return to search results

## 🌐 API Integration

This app uses the **OMDB API** to fetch movie data. Make sure you have a valid API key and the app is configured correctly to use it.

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:

- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Jayapriya Sivakumar - [GitHub Profile](https://github.com/JayapriyaSiakumar)

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a feature request? Please [create an issue](https://github.com/JayapriyaSiakumar/movieSearchApp/issues) on GitHub.

**Happy Coding! 🚀**
