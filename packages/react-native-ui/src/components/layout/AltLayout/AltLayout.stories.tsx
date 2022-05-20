import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Layout from './AltLayout';
import { LayoutProps } from '../Layout';

export default {
  title: 'components/layout/AltLayout',
  component: Layout,
};

type StoryLayoutProps = LayoutProps & { inner: any };
const defaultArgs: StoryLayoutProps = {
  title: 'Application',
  inner: {
    text: 'Sample inner text',
  },
};

export const Basic = ({ inner, ...args }: StoryLayoutProps) => (
  <SafeAreaProvider>
    <Layout {...args}>
      <View style={{ flex: 1 }}>
        <Text>{inner.text}</Text>
      </View>
    </Layout>
  </SafeAreaProvider>
);

Basic.args = defaultArgs;
