'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

module: {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    }, 
    {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }
  ]
}
vue: {
  loaders: {
    scss: 'style!css!sass'
  }
}
