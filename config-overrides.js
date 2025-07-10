const path = require('path');
const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/assets/styles'),
  }),
  addWebpackModuleRule({
    test: /\.(woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        publicPath: '/fonts/',
      },
    },
  }),
  addWebpackAlias({
  '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
})
);