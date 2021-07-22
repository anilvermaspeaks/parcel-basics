module.exports = {
    "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 10 },
    "mozjpeg": { "quality": 10 },
    "pngquant": { "quality": [0.2, 0.4] },
    "svgo": {
        "plugins": [
            { "removeViewBox": false },
            { "cleanupIDs": true },
        ]
    },
    "webp": { "quality": 10 }
}