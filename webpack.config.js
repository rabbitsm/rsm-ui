const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './lib'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    "react": {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    "styled-components": {
      root: "styled",
      commonjs2: "styled-components",
      commonjs: "styled-components",
      amd: "styled-components"
    }
  }
}
