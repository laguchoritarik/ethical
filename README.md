Explicit Content Blocker
A Chrome extension to hide explicit images, videos, and text on web pages.

Features
Blocks images and videos containing explicit content.
Scans page text for explicit words and hides media if detected.
Hides all media by default until the page is deemed safe.
Supports dynamic content loading.
Installation
Clone the repository: git clone https://github.com/your-repo/explicit-content-blocker.git.
Run npm install and compile with npx tsc.
Load the extension in Chrome via chrome://extensions/.
Usage
Visit any webpage; the extension will automatically hide explicit content.
Images and videos are only shown if no explicit words or attributes are detected.
Technology
Built with TypeScript and vanilla JavaScript.
No machine learning libraries; relies on keyword-based filtering.
License
MIT License. See LICENSE for details.