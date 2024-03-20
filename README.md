# Phoenix Project

✨ **A Prototype Monorepo Workspaces for Angular Projects** ✨

## Baseline
Version of each library or tool are being used

| Lib/Tool     | Version  |
|--------------|----------|
| Node Version | v18.18.0 |
| NPM Version  | v9.8.1   |
| Angular Cli  | 17.1.0   |
| NX Version   | v18.0.7  |

## Local Setup 
Run nx with `npx` or install `nx` instead.
```
npx nx@latest init
```
## Generate Apps, Library, Component etc.
Command to generate `Apps`
```
nx generate @nx/angular:application <AppName> --directory=apps/<AppName>
```
Command to generate `Libs` & `Shared-ui`, put in under Libs Folder
```
nx generate @nx/angular:library <LibName> --directory=libs/<LibName>
nx generate @nx/angular:library <LibName> --directory=libs/shared-ui/<LibName>
```
Command to generate `Component` and directory should in under Apps Folder 
```
nx generate @nx/angular:component <ComponentName> --directory=apps/<AppName>/src/app/<ComponentName>
```
Command to remove `Apps` or `Libs`
```
nx generate remove <LibName>
nx generate @nx/workspace:remove <LibName>
```
Run dry-run with flag `--dry-run`

## Local Run
Build and serve in hot deployment
```
nx serve <AppName>
```
Run linting to check code quality
```
nx lint <AppName>
```
Run unit test `Jest`
```
nx test <AppName>
```
Run end to end (e2e) test `Cypress`
```
nx e2e <AppName-e2e> --watch
```
Run parallel
```
nx run-many -t test build -p <AppName1> <AppName2>
```
## Json Server
Run Json Server to produce dummy JSON
```
npx json-server --port=3000 fake-backend/<JsonDBFile>
```
## Related Links
- [nx monorepo](https://nx.dev/)
- [ngx-ndbx](https://ngx-ndbx.frameworks.allianz.io/welcome)
- [ng-aquila](https://allianz.github.io/ng-aquila/welcome)
