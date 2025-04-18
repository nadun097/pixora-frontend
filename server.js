import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Map file extensions to content types
const contentTypeMap = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

const server = createServer(async (req, res) => {
  console.log(`Received request for: ${req.url}`);

  try {
    // Parse URL and normalize it to prevent directory traversal attacks
    let url = new URL(req.url, 'http://localhost').pathname;

    // Remove query parameters
    url = url.split('?')[0];

    // Special handling for image paths that might be in src folder
    let filePath;
    if (url.includes('/src/assets/images/')) {
      // Try multiple possible locations for the images
      const imageName = path.basename(url);

      // Try different possible paths
      const possiblePaths = [
        path.join(__dirname, 'dist', 'assets', imageName),
        path.join(__dirname, 'dist', 'images', imageName),
        path.join(__dirname, 'src', 'assets', 'images', imageName),
        path.join(__dirname, url) // original path as fallback
      ];

      // Find the first path that exists
      filePath = possiblePaths.find(p => existsSync(p));

      // If no path was found, default to the original request
      if (!filePath) {
        filePath = path.join(__dirname, 'dist', url);
      }
    } else {
      // Normal path handling for non-image resources
      filePath = path.join(__dirname, 'dist', decodeURIComponent(url));

      // For directory requests, default to index.html
      if (url.endsWith('/')) {
        filePath = path.join(filePath, 'index.html');
      }
    }

    const ext = path.extname(filePath);
    const contentType = contentTypeMap[ext] || 'application/octet-stream';

    // Check if file exists
    if (existsSync(filePath) && !filePath.includes('..')) {
      // File exists, serve it
      const data = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=31536000'
      });
      res.end(data);
      console.log(`Served: ${filePath}`);
    } else {
      // For SPA routing - if not a file with extension, serve index.html
      if (!ext || ext === '') {
        const indexData = await readFile(path.join(__dirname, 'dist', 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(indexData);
      } else {
        // File with extension not found
        console.log(`File not found: ${filePath}`);
        res.writeHead(404);
        res.end('Not Found');
      }
    }
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});