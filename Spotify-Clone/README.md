# Spotify Clone

A simple Spotify-inspired music player web app built using HTML, CSS, and JavaScript. This project replicates the basic UI and functionality of Spotify, allowing users to play, pause, and navigate songs.

## Features

- Play & pause songs
- Next & previous track controls
- Volume control & mute option
- Multiple playlists (e.g., NCS, Bollywood)
- Album covers and song info
- Responsive design (mobile-friendly UI)
- Sidebar menu (hamburger toggle)

## Technologies Used

- HTML5 – Structure of the app
- CSS3 – Styling and layout
- JavaScript (Vanilla JS) – Functionality and interactivity

## Project Structure

```
Spotify Clone/
│
├── index.html          # Main HTML file
├── style.css           # Main styles
├── utility.css         # Utility classes
├── script.js           # JavaScript logic
├── images/             # Icons and UI assets
├── songs/              # Music files & playlists
│   ├── cs/             # Bollywood songs
│   └── ncs/            # NCS songs
└── favicon.ico
```

## How to Run

- Download or clone the repository
- Open the project folder
- Double-click on index.html

OR

Run using Live Server (recommended in VS Code):

Right click index.html → Open with Live Server

## Functionality Overview

- Songs are loaded dynamically from folders
- JSON files (info.json) store playlist metadata
- JavaScript handles:
- Audio playback
- UI updates
- Song switching

## Preview

A Spotify-like interface with playlists, music controls, and responsive layout.

## Limitations

- No backend (pure frontend project)
- No user authentication
- Songs are locally stored (not streamed)

## Future Improvements

- Add backend (Node.js / Database)
- User login & playlists
- Search functionality
- Real-time streaming integration
- Progress bar improvements

## Author

Rafay Ali Saleem

**Happy Coding!**
