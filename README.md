# CRUD Products React App using React Query


**Overview:**

This is a simple CRUD product application to demonstrate using [React Query](https://react-query.tanstack.com/) side by side with redux.  The idea is that [React Query](https://react-query.tanstack.com/) takes care of the data loading and saving and React only takes care of application specific state like is modal open or closed, selected rows etc. 

_For an example on how to implement the same app using Redux Saga you can refer to this repository: [products-redux-sagas](https://github.com/loanburger/products-redux-sagas)._

**Prerequisites:**

- You'll need the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api.

**Tech:**

- [Yarn](https://yarnpkg.com/)
- React TypeScript
- [Material UI](https://mui.com/getting-started/installation/)
- [React Hook Forms](https://react-hook-form.com)
- React Testing Library
- [React Query](https://react-query.tanstack.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) - used for local app state like modal open/closed, selected rows etc.
- [Github Actions](https://github.com/features/actions) for running checks - CI workflow can be seen [here](https://github.com/loanburger/products-react-query/blob/main/.github/workflows/build_test_react.yml)

**To run the project:**

- Start the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api as described in [readme](https://github.com/loanburger/Mongo-Api-Docker/blob/master/README.MD) file of that repo.
- run `yarn install`
- run `yarn start:dev`


**Useful Articles:**

- [Getting Started with React-Query for Data Fetching and State Management](https://www.section.io/engineering-education/react-query-data-fetching-and-server-state-management)
