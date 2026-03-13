// Populated automatically during the build phase by picking
// all server exports from "src/entries/<entry_name>/server(/index)?.(js|ts)"
export const entries = (
  await Promise.all([
    // blank-demo
    import("../entries/blank-demo/server.ts"),
    // files-demo
    import("../entries/files-demo/server.ts"),
    // main
    import("../entries/main/server.ts"),
    // react-demo
    import("../entries/react-demo/server/index.ts"),
  ])
).map(({ server }) => server);
