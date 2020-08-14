# HistoryLogs

HistoryLogs is currently under heavy development. You can test yourself running:

```sh
# Development
npm install
npm run start:dev

# Production
npm install
npm run build

npx serve -s build
# or
npm install -g serve
serve -s build
```

HistoryLogs is a whitelabel and must have a `.env.local` file on root project.

Private Access Tokens can be created following the [Github Docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

```sh
REACT_APP_TOKEN=<YOUR_PRIVATE_ACCESS_TOKEN>
REACT_APP_OWNER=<OWNER_REPO>
REACT_APP_REPO=<REPO_NAME>
```
