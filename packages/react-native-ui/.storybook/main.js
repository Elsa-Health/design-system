module.exports = {
  stories: [
    '../src/components/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/visuals/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',

    /**
     * These addons are buggy
     * ------
     */
    // '@storybook/addon-ondevice-notes',
    // '@storybook/addon-ondevice-controls',
    // '@storybook/addon-ondevice-backgrounds',
    // '@storybook/addon-ondevice-actions',
  ],
  framework: '@storybook/react',
};
