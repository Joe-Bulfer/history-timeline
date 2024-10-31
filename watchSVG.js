const fs = require('fs');
const chokidar = require('chokidar');
const path = require('path');

// Path to your SVG file and HTML file
const svgFilePath = path.join(__dirname, 'timeline.svg');
const htmlFilePath = path.join(__dirname, 'index.html');

// Watch for changes in the SVG file
chokidar.watch(svgFilePath).on('change', () => {
  console.log('SVG file has changed, updating HTML file...');

  // Read the updated SVG content
  const svgContent = fs.readFileSync(svgFilePath, 'utf8');

  // Read the current HTML file content
  let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

  // Regex to find the SVG tag inside the HTML and replace it
  htmlContent = htmlContent.replace(/<svg[\s\S]*?<\/svg>/, svgContent);

  // Write the updated HTML content back to the file
  fs.writeFileSync(htmlFilePath, htmlContent);

  console.log('HTML file updated with new SVG content.');
});

console.log('Watching for changes to SVG file...');

