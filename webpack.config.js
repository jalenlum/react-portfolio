const path = require('path');
const Dotenv = require('dotenv-webpack');

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
   plugins: [
    // Add the Dotenv plugin to load environment variables
    new Dotenv({
      path: path.resolve(__dirname, './.env'), // Path to your .env file
      safe: true, // Only loads variables that are defined in .env
      systemvars: true,
    }),
  ],
};