const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/Post': { page: '/Post', query: { id: "id" } },
        };
    },
    cssModules: false,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                  }
            }
        });

        return config;
    }
}));
