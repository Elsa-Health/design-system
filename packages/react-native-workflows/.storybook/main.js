module.exports = {
  stories: [
    '../src/screens/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/screen-groups/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',

    // Buggy addons. Should send issue to storybook@github
    // -----------------------
    // '@storybook/addon-ondevice-notes',
    // '@storybook/addon-ondevice-controls',
    // '@storybook/addon-ondevice-backgrounds',
    // '@storybook/addon-ondevice-actions',
  ],
  framework: '@storybook/react',
};
