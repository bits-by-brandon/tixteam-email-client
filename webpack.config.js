var path = require('path'),
    webpack = require('webpack');

module.exports = {
    cache:true,
    debug:true,
    devtool: 'source-map',
    entry: {
        index: path.join( __dirname, '/app/src/scripts/entry.js' )
    },
    output: {
        path: path.join( __dirname, '/app/dist/scripts/app.js' ),
        filename: "app.js"
    },
    stats: {
        colors:true,
        modules:false,
        reasons:true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        noParse: /\.min\.js/
    },
    externals: [
        (function () {
            var IGNORES = [
                'electron'
            ];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ],
    resolve: {
        alias: {},
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json', '.jsx', '.json', '.styl', '.css', '.scss']
    },
    query:
    {
        presets:['react']
    }

}

