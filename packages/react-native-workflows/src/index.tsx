import React from 'react';

import type { NavigationProp, RouteProp } from '@react-navigation/native';
import type {
  FunctionListMap,
  StateMap,
  WorkflowScreenProps,
} from './public-types/workflow';

/**
 * Adds contextual information to the screen
 * attached to the flow
 * @param WfScreen
 * @param config
 * @returns
 */
export const withFlowContext =
  <T extends StateMap, A extends FunctionListMap>(
    WfScreen: (wfsp: WorkflowScreenProps<T, A>) => JSX.Element,
    config: {
      entry?: T;
      actions?: ({ navigation }: { navigation: NavigationProp<any> }) => A;
    } = {}
  ) =>
  ({
    navigation,
    route,
  }: {
    navigation: NavigationProp<any>;
    route?: RouteProp<any>;
  }) => {
    const entryData = React.useMemo(
      () => ({ ...config.entry, ...(route?.params || {}) }),
      [config.entry, route?.params]
    );
    return (
      <WfScreen
        entry={(entryData ?? {}) as T}
        actions={config.actions?.({ navigation }) ?? ({} as A)}
      />
    );
  };

export * from './public-types/workflow';
