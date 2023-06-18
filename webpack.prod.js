const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
    ],
});