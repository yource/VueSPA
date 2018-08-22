{
    mode: 'development',
    context: 'D:\\test\\mobile_spa',
    devtool: 'cheap-module-eval-source-map',
    node: {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    output: {
        path: 'D:\\test\\mobile_spa\\dist',
        filename: '[name].js',
        publicPath: './'
    },
    resolve: {
        symlinks: false,
        alias: {
            '@': 'D:\\test\\mobile_spa\\src',
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: [
            '.js',
            '.jsx',
            '.vue',
            '.json'
        ],
        modules: [
            'node_modules',
            'D:\\test\\mobile_spa\\node_modules',
            'D:\\test\\mobile_spa\\node_modules\\@vue\\cli-service\\node_modules'
        ]
    },
    resolveLoader: {
        modules: [
            'node_modules',
            'D:\\test\\mobile_spa\\node_modules',
            'D:\\test\\mobile_spa\\node_modules\\@vue\\cli-service\\node_modules'
        ]
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [{
                test: /\.vue$/,
                use: [{
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: 'D:\\test\\mobile_spa\\node_modules\\.cache\\vue-loader',
                            cacheIdentifier: '772708a6'
                        }
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                            cacheDirectory: 'D:\\test\\mobile_spa\\node_modules\\.cache\\vue-loader',
                            cacheIdentifier: '772708a6'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: './img/[name].[hash:8].[ext]'
                }]
            },
            {
                test: /\.(svg)(\?.*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: 'media/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: 'fonts/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-plain-loader'
                }]
            },
            {
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
            },
            {
                test: /\.p(ost)?css$/,
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
            },
            {
                test: /\.scss$/,
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.sass$/,
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                    indentedSyntax: true
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                    indentedSyntax: true
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                    indentedSyntax: true
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                    indentedSyntax: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.less$/,
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'less-loader',
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'less-loader',
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'less-loader',
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.styl(us)?$/,
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
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
                                    importLoaders: 3,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
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
                                    importLoaders: 3
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    function() { /* omitted long function */ }
                ],
                use: [{
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: 'D:\\test\\mobile_spa\\node_modules\\.cache\\babel-loader',
                            cacheIdentifier: '1721e16d'
                        }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        /* config.plugin('vue-loader') */
        new VueLoaderPlugin(),
        /* config.plugin('define') */
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
                BASE_URL: '"/"'
            }
        }),
        /* config.plugin('case-sensitive-paths') */
        new CaseSensitivePathsPlugin(),
        /* config.plugin('friendly-errors') */
        new FriendlyErrorsWebpackPlugin({
            additionalTransformers: [
                function() { /* omitted long function */ }
            ],
            additionalFormatters: [
                function() { /* omitted long function */ }
            ]
        }),
        /* config.plugin('hmr') */
        new HotModuleReplacementPlugin(),
        /* config.plugin('no-emit-on-errors') */
        new NoEmitOnErrorsPlugin(),
        /* config.plugin('progress') */
        new ProgressPlugin(),
        /* config.plugin('html') */
        new HtmlWebpackPlugin({
            templateParameters: function() { /* omitted long function */ },
            filename: 'index.html',
            template: 'D:\\test\\mobile_spa\\public\\index.html'
        }),
        /* config.plugin('preload') */
        new PreloadPlugin({
            rel: 'preload',
            include: 'initial',
            fileBlacklist: [
                /\.map$/,
                /hot-update\.js$/
            ]
        }),
        /* config.plugin('prefetch') */
        new PreloadPlugin({
            rel: 'prefetch',
            include: 'asyncChunks'
        }),
        /* config.plugin('copy') */
        new CopyWebpackPlugin(
            [{
                from: 'D:\\test\\mobile_spa\\public',
                to: 'D:\\test\\mobile_spa\\dist',
                ignore: [
                    'index.html',
                    '.DS_Store'
                ]
            }]
        )
    ],
    entry: {
        app: [
            './src/main.js'
        ]
    }
}