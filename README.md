This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically: ```npx create-react-app ${yourProjectName} --template typescript```<br />

To start up the project, copy the contents of .env.sample to .env, this will make the project be able to read the Bons Frontend Challenge API Url and be able to do the API calls

```cat .env.sample > .env```<br/>
```echo 'http://game.bons.me/api' >> .env```

Then feel free to start up the project.

Used mainly the Context API and Hooks to do all of the state management for each entity (game, player, monster).
The useEffect is crucial for fetching the new resource states after each turn, as you will see on each Context Provider definition.

Then, on the GameBoard feature we will have the main logic for determining if we win or lose the game based on certain state of the resources.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
