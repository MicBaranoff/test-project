const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: process.env.NODE_ENV === 'production'
      ? '/test-project/'
      : './',
  assetsDir: './',

  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/base/index.scss";'
      },
    }
  },

  configureWebpack: config => {
    config.module.rules
        .filter(r => r.test.toString().includes('svg'))
        .forEach(r => (r.test = /\.(png|jpe?g|gif)$/));

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-loader',
      exclude: /node_modules/
    });
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/assets/scss/base/index.scss']
    }
  },
})
