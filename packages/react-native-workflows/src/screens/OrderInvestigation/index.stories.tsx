import React from 'react';
import OrderInvestigationScreen from '.';

import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default {
  title: 'general-screens/OrderInvestigation',
  component: OrderInvestigationScreen,
};

export const Basic = (args: {
  investigationList: Array<{ id: string; name: string }>;
}) => (
  <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <OrderInvestigationScreen
        entry={{
          recommendedTests: [],
          value: [],
        }}
        actions={{
          getInvestigationList: () => args.investigationList,
        }}
      />
    </View>
  </SafeAreaProvider>
);

Basic.args = {
  investigationList: [],
};
