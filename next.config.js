const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Helpers': path.resolve(__dirname, './src/helpers'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@PCompo': path.resolve(__dirname, './src/components/page_components'),
      '@GCompo': path.resolve(__dirname, './src/components/generic_components'),
      '@Context': path.resolve(__dirname, './src/context')
    }
    return config
  }
}
