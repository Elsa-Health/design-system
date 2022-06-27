import type { NavigationProp, RouteProp } from '@react-navigation/native';
import type { FunctionListMap, StateMap, WorkflowScreenProps } from './public-types/workflow';
/**
 * Adds contextual information to the screen
 * attached to the flow
 * @param WfScreen
 * @param config
 * @returns
 */
export declare const withFlowContext: <T extends StateMap, A extends FunctionListMap>(WfScreen: (wfsp: WorkflowScreenProps<T, A>) => JSX.Element, config?: {
    entry?: T | undefined;
    actions?: (({ navigation }: {
        navigation: NavigationProp<any>;
    }) => A) | undefined;
}) => ({ navigation, route, }: {
    navigation: NavigationProp<any>;
    route?: RouteProp<any, string> | undefined;
}) => JSX.Element;
export * from './public-types/workflow';
