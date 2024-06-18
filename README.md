# YouTube Tab Manager Chrome Extension

## Overview

This Chrome extension manages the playback of YouTube videos based on the active tab. When a YouTube video tab is activated, the extension automatically plays the video. When the active tab is not a YouTube video, the extension pauses all YouTube videos in the background.

## Features

- Automatically play YouTube videos when the tab becomes active.
- Automatically pause all YouTube videos when the active tab is not a YouTube video.

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded or cloned the repository.

## Files

- `background.js`: Contains the main logic for managing tab activation and controlling video playback.
- `manifest.json`: Defines the extension's metadata and permissions.

## How It Works

### background.js

This file listens for tab activation events and controls the playback of YouTube videos accordingly.

#### Key Functions

- `chrome.tabs.onActivated.addListener`: Listens for tab activation events and triggers the logic to play or pause videos.
- `chrome.tabs.get`: Retrieves information about the activated tab.
- `chrome.tabs.query`: Queries all tabs matching the specified URL pattern.
- `chrome.scripting.executeScript`: Executes a script in the context of the specified tab.

#### Helper Functions

- `playVideo`: Plays the video in the active tab if it contains a video element.
- `pauseVideo`: Pauses the video in the specified tab if it contains a video element.

## Usage

1. Install the extension as described in the Installation section.
2. Open a YouTube video in a tab.
3. Activate the tab to start playing the video automatically.
4. Switch to a non-YouTube tab to pause all YouTube videos in the background.

## Contact

For any questions or issues, please contact Akshay Kadam at akshayykadam96@gmail.com.
