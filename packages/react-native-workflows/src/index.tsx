import type { NavigationProp, Route } from '@react-navigation/native';

export function withFlowContext() {
  return function ({
    navigation,
  }: {
    navigation: NavigationProp<{}, never, string, any>;
  }) {
    return <></>;
  };
}

// using workflow screen
