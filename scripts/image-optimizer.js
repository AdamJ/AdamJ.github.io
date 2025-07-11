const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets/img-raw'); // Store original large images here
const outputDir = path.join(__dirname, '../src/assets/img');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const { name, ext } = path.parse(file);

    if (ext === '.jpg' || ext === '.png') { // Process only JPG/PNG for now
        // Optimize for large view
        sharp(inputPath)
            .resize(1200) // Max width for large images
            .webp({ quality: 80 })
            .toFile(path.join(outputDir, `${name}-large.webp`), (err) => {
                if (err) console.error(err);
            });

        // Optimize for thumbnails
        sharp(inputPath)
            .resize(300) // Max width for thumbnails
            .webp({ quality: 70 })
            .toFile(path.join(outputDir, `${name}-thumb.webp`), (err) => {
                if (err) console.error(err);
            });

        // Optional: Also output a JPG fallback for older browsers (less compressed)
        sharp(inputPath)
            .resize(1200)
            .jpeg({ quality: 85 })
            .toFile(path.join(outputDir, `${name}-large.jpg`), (err) => {
                if (err) console.error(err);
            });
        sharp(inputPath)
            .resize(300)
            .jpeg({ quality: 75 })
            .toFile(path.join(outputDir, `${name}-thumb.jpg`), (err) => {
                if (err) console.error(err);
            });
    }
});
