const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        // app: ["babel-polyfill", './src/main.js']
        app: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash:8].js',
        publicPath: "./",
    },
    resolve: {
        symlinks: false,
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src')
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, "node_modules/@vue/cli-service/node_modules")
        ]
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, "./src"),
            options: {
                presets: ['env']
            }
        }, {
            test: /\.(png|jpe?g|gif|webp|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'img/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.(svg)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.css$/,
            oneOf: [{
                    resourceQuery: /module/,
                    use: [{
                            loader: 'vue-style-loader',
                            options: {
                                sourceMap: false,
                                shadowMode: false
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                importLoaders: 2,
                                modules: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                },
                {
                    resourceQuery: /\?vue/,
                    use: [{
                            loader: 'vue-style-loader',
                            options: {
                                sourceMap: false,
                                shadowMode: false
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                },
                {
                    test: /\.module\.\w+$/,
                    use: [{
                            loader: 'vue-style-loader',
                            options: {
                                sourceMap: false,
                                shadowMode: false
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                importLoaders: 2,
                                modules: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                },
                {
                    use: [{
                            loader: 'vue-style-loader',
                            options: {
                                sourceMap: false,
                                shadowMode: false
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                }
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "public/index.html")
        }),
        new CopyWebpackPlugin([{
            from: './public',
            to: '',
            ignore: [
                'index.html',
                '.DS_Store'
            ]
        }])
    ]
}