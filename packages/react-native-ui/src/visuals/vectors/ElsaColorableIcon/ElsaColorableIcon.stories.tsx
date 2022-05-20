import React from 'react';
import { View, Text } from 'react-native';

import ElsaColorableIcon from './ElsaColorableIcon';

export default {
  title: 'visuals/vectors/ElsaColorableIcon',
  component: ElsaColorableIcon,
};

export const Basic = (args) => (
  <View>
    <ElsaColorableIcon
      width={args.width}
      height={args.height}
      color={args.color}
    />
  </View>
);

Basic.args = {
  width: 24,
  height: 24,
  color: '#4665af',
};
