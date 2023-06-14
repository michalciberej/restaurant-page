const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    mode: "development",
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader'
        },
        ],
    },
};