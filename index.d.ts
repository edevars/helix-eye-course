export { };

declare global {
  interface Window {
    __INITIAL_PROPS__: {
      galaxies?: []
    };
  }
  interface NodeModule {
    hot: any
  }
}