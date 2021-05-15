module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-throw-expressions',
  ],
  retainLines: true,
  sourceMaps: 'inline',
  ignore: ['node_modules', '.compiled'],
};
