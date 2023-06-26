## About

The project is part the multi attendance zap project where is responsable send message and get message what'sapp.

## Instructions to run project

- Clone project
- Execute command **npm i** to install all modules your project needs.
- Execute command **npm run start:dev** to run project in dev environment
- Execute command **npm run start:prod** to run project in production environment
- Execute command **npm run test** to run application test
- Execute command **npm run lint** to run lint check if code is follow patterns.

## The project structure

```
- tests/      -> where you put test code.
- src/        -> where you put source code.
  - services/ -> where you put business logic code.
  - adapters/ -> where you put code interact another services. For example: firebase(storage)
  - configs/  -> where you put code responsable config things in project.

```

## How to work with Git and Github

- Branch **master** code go to production
- Branch **staging** code go to staging. Warn: in future can have staging environment to validate if feature is ok before send production.
- Branch **develop** all new feature created based this branch.

### Rules 

- To write commit message in english
- Never send your directly to branchs: **master**, **staging** and **develop**
- Always you complete your feature open pull request to branch **develop**
- When create branch for new feature you need use this pattern: feature/shor_description_about_task

## Links helpful

| About  |  Language | Links  | 
|---     |---        |---     |
|   Adapter pattern     |    English       |    [Click here](https://refactoring.guru/design-patterns/adapter/typescript/example)    |
|  Library to work whatsapp      |   English        |   [Click here](https://www.npmjs.com/package/venom-bot)     |
|   Apply eslint when save code in Vscode          |        English          |  [Click here](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting#step-4-adding-code-actions-on-save)      |
