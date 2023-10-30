const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";
const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    static: { 
      directory: path.resolve(__dirname, './src/static'), 
      publicPath: '/assets'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    })
  ],
  resolve: { 
    alias: { 
      "@": path.resolve(__dirname, "src"),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx|wasm|ts|tsx)$/i,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       plugins: [
      //         ["@babel/plugin-transform-typescript", {"allowDeclareFields": true}],
      //         ["@babel/plugin-proposal-decorators", {"decoratorsBeforeExport": true}],
      //         ["@babel/plugin-proposal-class-properties"]
      //       ],
      //       presets: ['@babel/preset-env', '@babel/preset-typescript']
      //     }
      //   }
      // },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        sideEffects: true,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [{
            loader: 'lit-scss-loader',
            options: {
              minify: true,
            },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimize: true,
    chunkIds: 'named',
    moduleIds: 'named'
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
