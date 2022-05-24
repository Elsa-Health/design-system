import React from 'react';
import BodyViewIllustration from './BodyViewIllustration';

import { Text, View } from 'react-native';

export default {
  title: 'visuals/Illustrations/BodyViewIllustration',
  component: BodyViewIllustration,
};

export const Basic = (args) => (
  <View>
    <BodyViewIllustration width={450} height={450} />
    <View style={{ marginTop: 5, alignContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{args.text}</Text>
      <Text style={{ marginTop: 4, color: '#555' }}>{args.description}</Text>
    </View>
  </View>
);

Basic.args = {
  text: "Feeling Sick? We've got you!",
  description: `Nulla id dolor eu justo varius tempor a sed felis. Proin et interdum tortor. Sed maximus sem id quam rutrum cursus.`,
};
