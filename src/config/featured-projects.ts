// Controls which projects the Projects page shows, and in what order.
//
// Leave empty to show every project (the normal, main-branch behavior).
//
// For a job-application preview branch, list the project slugs (their
// folder names under src/content/projects/) you want to feature, in the
// order they should appear. Any slug that doesn't match a real project
// is skipped rather than breaking the build.
export const featuredProjects: string[] = [];
