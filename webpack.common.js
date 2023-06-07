const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

CATALOG_SRC = path.resolve(__dirname, 'src')
CATALOG_PROD = path.resolve(__dirname, 'prod')

module.exports = {
    entry: path.resolve(CATALOG_SRC, "index.js"),
    output: {
        path: CATALOG_PROD,
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Главная",
            template: path.resolve(CATALOG_SRC, 'index.html'),
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: "Каталог",
            template: path.resolve(CATALOG_SRC, 'catalog.html'),
            inject: 'body',
            minify: false,
            filename: "catalog.html"
        }),
        new HtmlWebpackPlugin({
            title: "Каталог",
            template: path.resolve(CATALOG_SRC, 'detail.html'),
            inject: 'body',
            minify: false,
            filename: "detail.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            path: 'postcss.config.js'
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "expanded",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
};