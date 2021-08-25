# react-game-of-life
It's been a while since I've done this exercise. Let's do the CellGrid of Life in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why?

This is one of those code examples that comes up often - "how would you build it?" And usually "we want to see how, and why, and then pick it apart, while you write it."

Not everyone is built to talk and code, and people want to act like that's a negative.

It isn't.

Some of the best developers I have ever met can't tell you what they're doing, because in order to speak out what they're doing, it causes them to slow way down, which then makes it 10x more frustrating, as your mind has already moved on to the next issue while your hands are trying to output what they want to see even though you know it's wrong, but you're now multitasking a "write code, explain code, test code, while my mind has already figured it out and we need to rewrite it, but now I have to explain that what I'm writing is wrong."

I was one of those kids who would write the answer, then show the work, because it was easier for me to give the answer and then prove I knew it, and it's the same with code.

So I poked around several implementations of this game in various languages, and grabbed the best pieces and compiled them into one repo for myself, to add some additional flair as I play with it. As it is a simple use-case, we don't need redux (it's still useful, just overkill here). The whole "context provider" was something I was introduced to when hooks came out, and I used it on a project that worked really well.

Next addition:
- I'd like to add a CSS preprocessor (I like using SASS/SCSS/LESS)
- Unit tests. Just for fun, to show "how I like to write my tests"
- Maybe a UI library? Everyone keeps tacking on Bootstrap, I've used Material, but is there something a little more basic?
- whatever else that comes up that would seem fun to implement in a project!

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
