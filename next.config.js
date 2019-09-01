const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
    assetPrefix: process.env.NODE_ENV === "production" ? 'https://sarpere.github.io/': "",
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    },
    cssModules: false,
}));
