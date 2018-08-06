module.exports ={
  mode: "production",
  entry: "./webpack/js/main.js",
  output: {
    path : __dirname + "/assets/js/",
    filename: "site.js"
  },
  module:{
    rules: [
      {
        test: /\.js$/ ,
        use : "babel-loader",
        exclude: ["node_modules"]
      }
    ]
  }
}
