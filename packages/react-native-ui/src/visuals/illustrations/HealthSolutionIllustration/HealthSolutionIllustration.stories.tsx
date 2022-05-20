import HealthSolutionIllustration from './HealthSolutionIllustration';

import { Text, View } from 'react-native';

export default {
  title: 'visuals/illustrations/HealthSolutionIllustration',
  component: HealthSolutionIllustration,
};

export const Basic = (args) => (
  <View>
    <HealthSolutionIllustration width={450} height={450} />
    <View>
      <Text>Pressable</Text>
    </View>
  </View>
);

Basic.args = {
  text: 'Title',
  description: 'Description Text here',
};
