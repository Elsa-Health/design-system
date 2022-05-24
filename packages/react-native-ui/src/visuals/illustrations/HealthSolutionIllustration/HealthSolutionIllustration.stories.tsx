import HealthSolutionIllustration from './HealthSolutionIllustration';

import { Text, View } from 'react-native';

export default {
  title: 'visuals/Illustrations/HealthSolutionIllustration',
  component: HealthSolutionIllustration,
};

export const Basic = (args) => (
  <View>
    <HealthSolutionIllustration width={450} height={450} />
    <View style={{ marginTop: 5 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{args.text}</Text>
      <Text style={{ marginTop: 4, color: '#555' }}>{args.description}</Text>
    </View>
  </View>
);

Basic.args = {
  text: 'Hey There!',
  description: `Nulla id dolor eu justo varius tempor a sed felis. Proin et interdum tortor. Sed maximus sem id quam rutrum cursus.`,
};
