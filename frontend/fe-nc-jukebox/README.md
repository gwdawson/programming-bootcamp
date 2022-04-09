# React Intro

## Getting started

Welcome to React and your very own Jukebox. To get up and running with this repo:

- run `npm install` to install `react`, `react-dom`, `react-scripts` and their dependencies. (They are quite large and this may take a few minutes)
- run `npm start` to serve the app on `localhost:3000`

This repo has some hard coded data and css classes setup for you to work with in order to setup your jukebox.

For the purposes of this sprint all the data you will be working with will be static and won't change. This is for you to practice making React components, passing props and rendering a UI based on JS variables.

In the future these variables will change over time with the use of React state but for today they will remain constant as the principles for rendering that data remain the same.

## Tasks

1. Time to setup your jukebox. Replace the `playListTitle` variables value with your own name. Update the `h1` tag to render the title of your playlist so that everybody knows just how good your music taste is. **nb** makes sure you use the value from the `playListTitle` and don't just hard code the title into the `h1` for the purpose of this exercise.

2. Now you've put a name to it, it's time to show the world what tracks are queued up. Underneath your heading render and `ordered list` of `list items` for your songs. Each list item should contain a `h2` containing the tracks title, a `p` tag with the artists name and an image of the album artwork. Again make sure that you are generating these `list items` dynamically based on what's in the `songs` variable.

3. The data's there but it's not very pretty! Add some CSS classes to your songs to present them in a nicer way. There are some pre-built classes in `index.css` of `song-list`, `song-item` and `song-img` that you can use. Open your browsers dev tools and inspect the console. Make sure that you have no warnings from React. Resolve any warnings that React is giving you.

4. Before you go any further it's time to extract some of this rendering logic to separate components. Create a new functional Component called `Header`. Extract the `h1` that you are currently rendering to this new component but do not move the `playListTitle` variable. Pass this information to your new component via `props` instead. Everything should render on the page as it did before.

5. Create a new component called `Songs`. Extract the rendering your list of songs to this new component. As before everything should render just as it was and your `App` is rendering two child components.

6. Time to show which song is currently being played. Render the `currentlyPlaying` song in your `Songs` component.

7. This doesn't stand out visually however. Add the pre-built class of `song-current` to the song that is being played from your list to highlight it.

8. The next step is to show the user how many times each song has been played. Create a new component called `PlayCounts` and render it underneath your `Songs`. This component should show the user how many times each song has been played according to the `playCounts` variable.

**nb** Although there are exactly 3 songs in this hard coded example you should account for the possibility that more songs could be added later. Make sure that your component will render the counts regardless of how many keys the `playCounts` object contains.

9. Add a total to your `PlayCounts` telling the user how many tracks have be played in total.

10. This file is getting long. Time to extract each component to it's own file. Create a `components` directory inside of `src` and create a file for each of your components. A good naming convention is to name the files after the components themselves e.g. `Header.js`. Import each of your components into `App.js` and render them as you were before. Make sure that your app still renders correctly once you are done.

11. We won't be building a fully functional jukebox in this example but we will give our users a little preview of the current track. In the `Songs` component use an `<iframe>` to embed a preview of the current song using the songs `previewURL`.

## Advanced

12. Your Jukebox is going to start accepting cash to allow users to play the songs. Your Jukebox will start with £0 and users can click a button to add £1 to the balance.

In order for the current total to be dynamic our component is going to need some `state`. Take a look at the [React Docs](https://reactjs.org/docs/hooks-intro.html) on the `useState hook` and research how to keep the number of likes you've received in state.

Time to add some cash to the total. When the user clicks on the button increase the amount of cash currently available by £1. The user should be able to click this button as many times as they like 👍.

13. Excellent work getting this far 🙌 The variables you've been working with so far have been static and unable to change. Time to change that. Choose some of the data that is currently held in a variable and refactor your app to hold it in state instead. Add some buttons to your app that your users can click on to update the state of your app. What functionality you add is up to you but make sure you use the docs to figure out how the `useState` hook works and how to apply it to your situation.
