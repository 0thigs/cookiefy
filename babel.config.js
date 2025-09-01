module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-css-interop/babel', // necessário no NativeWind v4
      'nativewind/babel',
      // aliases opcionais
      ['module-resolver', { alias: { '~': './src', '@': './' } }],
      'react-native-reanimated/plugin', // SEMPRE por último
    ],
  };
};
