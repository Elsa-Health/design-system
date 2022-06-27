// Workflow configuration
export type WorkflowScreenProps<
  InitialProps extends StateMap,
  Actions extends FunctionListMap = {}
> = {
  entry: InitialProps;
  actions: Actions;
};

export type StateMap = { [field: string]: any };
export type FunctionListMap = { [fnName: string]: (...a: any[]) => any };
