const path = require('path');

module.exports = {
    modify: require("razzle-heroku"),
    plugins: [
        {
            name: "purgecss",
            options: {
                // This path options is required for PurgeCSS to analyzed all of yours content
                path: path.resolve(__dirname, "src/**/*"),
            },
        },
    ],
};
