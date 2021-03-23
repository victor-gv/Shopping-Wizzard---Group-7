`#react-router-intro` `#assembler-school` `#master-in-software-engineering`

# Assembler School: React Router Intro Pill <!-- omit in toc -->

In this pill you will create a React App using React Router and the [Punk API V2](https://punkapi.com/documentation/v2).

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [Instructions: Prop Drilling](#instructions-prop-drilling)
- [The Punk API V2](#the-punk-api-v2)
- [Routing](#routing)
- [Pages](#pages)
- [Extra Steps 💯](#extra-steps-)
- [Instructions: Context API](#instructions-context-api)
- [Instructions: Redux](#instructions-redux)
- [Resources](#resources)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-router-intro-pill.git
```

## Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the base instructions of the pill and the solutions for each section.

The branches follow a naming strategy like the following:

- `main`: includes the main contents and the instructions of the pill
- `prop-drilling-solution`: includes the solution of the pill using prop drilling
- `context-solution`: includes the solution of the pill using the Context API
- `redux-solution`: includes the solution of the pill using Redux

### Fetching All The Branches

In order to fetch all the remote branches in the repository you can use the following command:

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## Instructions: Prop Drilling

In this part we will create a SPA for the Punk API V2 using React Router. This is a demo layout of how it could be, feel free to build your own.

<div style="background-color: #fff2eb; padding: 12px; margin-bottom: 24px;">

In this part of the pill you `MUST` use prop drilling and not any other more optimal solution such as the Context API, Redux or any other state management library. The goal of this part of the pill is to learn what is prop drilling and why it is bad.

We will intentionally do things wrong so that you get a better feeling of the pain of working with prop drilling.

</div>

<img src="src/img/app-intro.png">

## The Punk API V2

The API we will use for this pill is the Punk API V2 and the following endpoints:

- `https://api.punkapi.com/v2/beers?page=1&per_page=9`: The main endpoint used to fetch all the beers using pagination
- `https://api.punkapi.com/v2/beers?brewed_after=10/2013`: Fetch all the beers that were brewed after that date

## Routing

You will have to use React Router to define the routes and components that are rendered for each route.

### App Component

### Steps

1. On the initial mount, you will make a request to the api to fetch items using pagination
2. The request will have to be made in the App component which will pass the data as props to the other pages
3. The items will have to stored in state so that they are passed as props to the `Home` component
4. You should conditionally render a `loading` or `error` state if the request fails

## Pages

### Home

- Path: `/`
- Component: `<Home ...props />`

<img src="src/img/app-intro.png">

In this page you will render all the data fetched from the api using the main endpoint. This will be done in the `<App />` component and be passed to the `<Home />` component as props.

This page component will render the elements received on the screen.

Each component will have to render a link to the `/beers/:beerId` path to see the individual details of each element.

### Bonus steps 💯

#### Home page pagination

As an extra for this page you can implement pagination using something similar to the `Next page` button you see in the screenshot. This will fetch a new batch of items from the api.

The pagination is handled using the `page=1` and `per_page=9` search params. By changing the `page` from `page=1` to `page=2` you will fetch another 9 elements.

The elements should be appended to the previous ones.

### Beer Info

- Path: `/beers/:beerId`
- Component: `<BeerInfo ...props />`

<img src="src/img/beer-info.png" style="margin-bottom: 32px;">

#### Step 1

In this page you will render the complete info of the beer that is received as a param from React Router.

Since the route is defined as: `/beers/:beerId` you will receive the individual `id` of the beer from the router. You should use this info to find the individual element in the `beers` array fetched in the `<App />` component.

#### Step 2

In this part you will have to render a `First brewed: <date>` link that renders the `/beers/find?brewed_after=<date>` path which makes a request to the api using search params to find all the beers brewed after the date you are passing in from the Link component.

The `brewed_after` property will be read from the info of each beer since it returns it with each network request.

```json
{
  "id": 21,
  "name": "Vice Bier",
  ...
  "first_brewed": "04/2013",
  ...
}
```

### Find

- Path: `/beers/find?brewed_after=<date>`
- Component: `<Find ...props />`

<img src="src/img/find-brewed-date.png" style="margin-bottom: 32px;">

In this page you will render the beers that match the `brewed_after=<date>` query.

Then, each result should render a `Link` to see the individual info about each beer in the `/beers/:beerId` path.

However, since the `BeerInfo` component uses info from memory you might find that you are looking for a beer that is not yet in memory. For this case you will have to render a message similar to the following:

<img src="src/img/beer-not-found.png" style="margin-bottom: 32px;">

## Extra Steps 💯

### 1. Authentication

You should implement authentication using `localStorage` and a `ProtectedRoute` component so that the `<Header />` component renders a button to `Login` if the user is not logged in or a button to `Logout` if the user is logged in.

Maybe even a `useAuth()` custom hook 👀 that syncs the data in `localStorage` every time it changes.

#### Login

<img src="src/img/login.png" style="margin-bottom: 32px;">

#### Logout

<img src="src/img/logout.png" style="margin-bottom: 32px;">

Furthermore, this login should be used to not allow users to open the `/beers/:beerId` page if they are not logged in.

### 2. Fetch The Single Beer Info From The API

If the `beerId` is not found in memory, you should make a network request to fetch the info and store it in the main state of the `<App />` component.

## Instructions: Context API

In this part of the pill you will have to implement the same functionality as before but using the Context API.

### App Data Context

You should store the list of beers that is fetched from the api in a `Context.Provider` that wraps the entire app. This way, any component that needs the data can fetch it using the `useContext(Context)` hook.

### Auth State Context

Another context you could use in this app is the provider that contains the authentication state of the app. This can also wrap the entire app of the branch that needs access to the authentication state.

### Extra Steps 💯

1. Handle the app state with the `useReducer()` hook for easier management of the different states of the app (`loading`, `error`, `data`, etc).
2. Implement the entire logic using hooks 💯

## Instructions: Redux

In this part of the app you will have to refactor it so that it uses Redux for the state management. This means that you will need to stop using the Context API and store everything in the Redux Store. This includes both the beers and authentication data.

For this part, you cannot use any Redux middlewares such as thunk for the data fetching logic, everything will be done using `dispatch` and async functions.

We also recommend using Redux hooks but the `connect()` method is also allowed even though the Redux team recommends using hooks from now on.

## Resources

- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [React.js](https://reactjs.org/)
- [Punk API V2](https://punkapi.com/documentation/v2)
- [React Router](https://reactrouter.com/web/guides/quick-start)

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
