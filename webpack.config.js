var path = require('path');
const pkg = require('./package.json');
const libraryName= pkg.name;

module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'commonjs2',
    publicPath: '/dist/'
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist|example)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: { 
      alias: { 
          'react': path.resolve(__dirname, './node_modules/react') ,
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          'styled-components': path.resolve(__dirname, './node_modules/styled-components')
      } 
  },
  externals: {
      // Don't bundle react, react-dom, styled-system or styled-components
      react: {
          commonjs: "react",
          commonjs2: "react",
          amd: "React",
          root: "React"
      },
      "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "ReactDOM",
          root: "ReactDOM"
      },
      "styled-components": {
          commonjs: "styled-components",
          commonjs2: "styled-components",
          amd: "styled-components",
          root: "styled-components"
      }
  }
};