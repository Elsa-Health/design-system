import React from 'react';
import { View, Text } from 'react-native';

import ElsaIcon from './ElsaIcon';

export default {
  title: 'visuals/vectors/ElsaIcon',
  component: ElsaIcon,
};

export const Basic = (args) => (
  <View>
    <ElsaIcon width={24} height={24} />
  </View>
);

Basic.args = {};
