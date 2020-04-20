module.exports = {
  devServer: {
		public: 'starcoke.kr',
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
  }
}