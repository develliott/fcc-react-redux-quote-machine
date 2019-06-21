This project was developed to refresh my React knowledge and implement Redux into a React project. It was suggested by [FreeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine).

# Information

This project was firstly created by using the [create-react-app](https://www.npmjs.com/package/create-react-app) package. I created a simple application which fetched an array of quotes from a [gist endpoint](https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json) using the [axios](https://www.npmjs.com/package/axios) package which I wrapped in a http service (at ./src/services/http.js). I rendered this data via a react component (at ./src/components/quote-box.jsx).

I then installed [redux](https://www.npmjs.com/package/redux), [react-redux](https://www.npmjs.com/package/react-redux) and [redux-thunk](https://www.npmjs.com/package/redux-thunk) to take away the concern of maintaining state from react and instead into redux. This transition meant that react would now be just a view layer and thus only a representation of the redux state.

This exercise helped my understanding of the redux store and how actions are dispatched succinctly.

The only thing I'm unsure about is UpdateQuoteHelper() (in ./src/components/quote-box.jsx). In order to generate a random quote, I pass the entire array to UpdateQuote() (in ./src/actions/quoteActions.js). This enables me to use [lodash](https://www.npmjs.com/package/lodash) to generate a random index and consequently set a random quote. This approach removes the business logic concern from the react component which keeps it as a presentational layer. However, passing the entire array this way doesn't feel right and I'm not sure if I could get access to the array within the action an alternative way or if this pattern is correct\*.

\*Update: I have since read an [Immutability Guide](https://daveceddia.com/react-redux-immutability-guide/) and have learnt that Javascript passes objects by reference and primitives by value. This means I am not passing the entire array, I am passing a pointer to the memory address of the object. My approach now seems more reasonable.

As I continue these projects I know I will dig in and learn more and figure out better ways, but if you have the benefit of hindsight and free time I would greatly appreciate any advice or suggestions.

# React Information

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
