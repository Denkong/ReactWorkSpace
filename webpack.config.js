var path = require('path');

module.exports = {
    entry: "./src/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка public
        filename: "main.js", //скомпанованный файл
        publicPath: 'dist/',     //необходим для webpack-dev-server
    },
    devServer:{
      overlay:true, //вывод ошибки прямо на жкране в браузрере
    },
    devtool:"source-map", //Удобный source-map, можно посмоотреть в браузере где вызван код
    //будет создаваться дополнительный файл main.js.map - его лучше удалить п родакшине

    module:{
      rules:[   //загрузчик для jsx
          {
              test: /\.jsx?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:["env", "react"]    // используемые плагины
              }
          }
      ]
    }

}
