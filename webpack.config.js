module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './entry',  // 進入點
  output: {
    filename: 'bundle.js',  // 輸出的檔案名稱
  },
  module: {
    loaders: [{
      test: /\.js$/,   // 針對 js 檔
      loaders: ['babel'],
      exclude: /node_modules/   // 不要處理 3rd party 的 code
    },{
      test: /\.css$/,  // 針對 css 檔
      loaders: ['style', 'css'], //由右處理到左邊
      exclude: /node_modules/   // 不要處理 3rd party 的 code
    }]
  }
};