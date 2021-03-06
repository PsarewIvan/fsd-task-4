const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { dirname } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all', // загружает в один отдельный файл сторонние библиотеки
    },
  };

  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

// функция возвращает имя файла с хешем (для прода) или нет
const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// конфигурация babel
const babelOptions = (preset) => {
  const opts = {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  };

  if (preset) {
    opts.options.presets.push(preset);
  }

  return opts;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: '../demo/pug/pages/index.pug',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'demo/assets/favicon'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ];
  if (isDev) {
    base.push(new webpack.HotModuleReplacementPlugin());
  }
  return base;
};

module.exports = {
  // путь от которого отталкивается webpack
  context: path.resolve(__dirname, 'src'),

  // режим для разработки
  mode: 'development',
  entry: {
    // входная точка приложения
    main: ['@babel/polyfill', '../demo/pug/pages/index.ts'],
  },
  output: {
    // файл получаемый на выходе
    filename: filename('js'),

    // папка, куда все будет складываться
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // расширения файлов которые ищет вебпак
    extensions: ['.js', ',json', '.ts'],
  },
  optimization: optimization(),
  devServer: {
    port: 8085,
    hot: isDev,
  },
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: babelOptions(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: babelOptions('@babel/preset-typescript'),
      },
    ],
  },
};
