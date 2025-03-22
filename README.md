# Anniversary Gift Project

This project is a static website created as an anniversary gift. It features an interactive experience that includes a lock screen, an envelope that can be opened to reveal a letter, and a home page with a countdown of days spent together. The website also includes sections for music and a gallery of pictures from the past year.

## Project Structure

```
anniversary-gift
├── src
│   ├── index.html          # Main entry point of the website
│   ├── pages
│   │   ├── lockscreen.html # Lock screen interface
│   │   ├── envelope.html   # Envelope page with interactive elements
│   │   ├── home.html       # Home page with countdown and links
│   │   ├── letter.html     # Letter to be read
│   │   ├── music.html      # Music section with Spotify playlist
│   │   └── gallery.html    # Gallery of pictures
│   ├── css
│   │   ├── style.css       # General styles
│   │   ├── lockscreen.css   # Styles for lock screen
│   │   ├── envelope.css     # Styles for envelope page
│   │   ├── home.css         # Styles for home page
│   │   └── gallery.css      # Styles for gallery page
│   ├── js
│   │   ├── main.js         # Main functionality and navigation
│   │   ├── lockscreen.js    # Logic for lock screen
│   │   ├── envelope.js      # Envelope opening and music playback
│   │   ├── countdown.js      # Countdown logic
│   │   ├── spotify.js       # Spotify API integration
│   │   └── gallery.js       # Gallery image management
│   ├── assets
│   │   ├── audio
│   │   │   └── background-music.mp3 # Background music for envelope
│   │   └── images
│   │       └── envelope.svg # SVG image of the envelope
│   └── data
│       └── config.json      # Configuration data for the project
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Features

- **Lock Screen**: A secure entry point that requires interaction to unlock.
- **Envelope Interaction**: An animated envelope that can be opened to reveal a letter, accompanied by background music.
- **Countdown Timer**: Displays the number of days spent together, enhancing the sentimental value.
- **Music Section**: Integrates with Spotify to provide a playlist of meaningful songs.
- **Gallery**: A collection of photos from the past year, celebrating shared memories.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `src/index.html` in a web browser to view the project.
4. Ensure you have an internet connection for Spotify integration.

## Acknowledgments

This project is a personal gift and a celebration of love and memories shared over the past year.