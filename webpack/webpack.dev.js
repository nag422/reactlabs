const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    devServer:{
        hot:true,
        open:true,
        historyApiFallback: true
    },

    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codevolutions'),
            'process.env.apiurl': JSON.stringify('https://app.kiranvoleti.com'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
}