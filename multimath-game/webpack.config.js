module.exports = {
    entr: "./src/index.js",
  output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js",
      
  },
  devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/assets", //should provide the path of the served js , img , etc...
      
  },
  
};

