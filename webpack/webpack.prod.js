const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codevolutions'),
            'process.env.apiurl': JSON.stringify('https://app.kiranvoleti.com'),
        }),
        new BundleAnalyzerPlugin(),
    ],
}