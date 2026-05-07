// Populated automatically during the build phase by picking
// all server exports from "src/entries/<entry_name>/server(/index)?.(js|ts)".
// Ignore this file if a custom set of entry exports is required.
export const entries = (
  await Promise.all([
    import("../entries/blank-demo/server.ts"),
    import("../entries/files-demo/server.ts"),
    import("../entries/main/server.ts"),
    import("../entries/react-demo/server/index.ts"),
    import("../entries/react-demo-typed-routes/server/index.ts"),
  ])
).map(({ server }) => server);
