var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var config = {
  context: __dirname + '/public',
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === "test",
      ON_PRODUCTION: process.env.NODE_ENV === "production",
      ON_DEVELOPMENT: process.env.NODE_ENV === "development"
    })
  ],
  module: {
    loaders: [   
         {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },{
      test: /\.html$/,
      loader: 'raw',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg|jpeg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }]
  }
};
if (process.env.NODE_ENV === "production") {
  config.output.path = __dirname + "/dist";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }));
  config.devtool = 'source-map';
} else if (process.env.NODE_ENV === "development") {
  config.output.path = __dirname + "/dist";
  config.plugins.push(new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }));
} else {
  config.plugins.push(new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }));
}
module.exports = config;