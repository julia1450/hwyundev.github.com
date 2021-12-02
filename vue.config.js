const path = require("path")
module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/portfolio" : "/",
	outputDir: "./docs",
	devServer: {
		overlay: false,
	},
	chainWebpack: config => {
		config.resolve.alias.set("@", path.resolve(__dirname, "src/"))
	},
}
