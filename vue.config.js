const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "productgion" ? "/vue-corona-app" : "/",
  outputDir: "docs",
  transpileDependencies: true,
});
