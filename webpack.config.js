const path = require('path');

module.exports = {
    entry : {
      index : './src/webpack-render/index.js',
   
    },
    output: {
      filename:'[name].js',
      path: path.resolve(__dirname,'dist')
    },
    devServer: {
      port: 3010,
      watchContentBase: true,
    },
    module: {
      rules: [
        {
          test: /\.(?:js|jsx|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react',]
              ]
            }
          }
        }
      ]
    },
};