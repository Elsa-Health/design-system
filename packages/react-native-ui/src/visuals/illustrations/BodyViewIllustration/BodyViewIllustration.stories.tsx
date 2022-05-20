import React from 'react';
import BodyViewIllustration from './BodyViewIllustration';

import { Text, View } from 'react-native';

export default {
  title: 'visuals/illustrations/BodyViewIllustration',
  component: BodyViewIllustration,
};

export const Basic = (args) => (
  <View>
    <BodyViewIllustration width={450} height={450} />
    <View>
      <Text>Pressable</Text>
    </View>
  </View>
);

Basic.args = {
  text: 'Title',
  description: 'Description Something here',
};
