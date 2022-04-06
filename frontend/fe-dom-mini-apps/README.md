# DOM Mini-Apps

Today is just about trying some things out and getting to know the DOM. You'll be making a simple website that your users can interact with. Below are a list of suggested ideas to get started with. Either choose an idea from this list or get creative and come up with your own idea, (just try to keep it relativley simple.)

Start off with the core functionality of your site to get it working, and then think about additional features you can add.

## Mini App Ideas

### A Multiple Choice Quiz

- Create a quiz that asks a series of questions in turn to the user.
- Each question should have multiple choice answers the user can click on.
- The user should recieve feedback telling them if they got the answer right as well as moving on to the next question.
- At the end of the quiz they should be given their score.

_Additional_

- Randomise the questions to keep your quiz interesting. (Make sure you don't repeat any questions!)
- Choose a theme for your quiz to make it more interactive. Game shows such as [Who wants to be a millionaire](https://uk.wwbm.com/) are a good source of inspiration.

### Noughts and Crosses

- A true classic. Users can click on squares to place an alternating `X` or `O`
- If a user places 3 `X` or `O`'s horizontally, vertically or diagonally then the game let's them know that they've won!

_Additional_

- Players can only choose squares that haven't already been taken.
- Once a player has won allow them to reset the game.
- Keep track of the players scores.
- Alternate who goes first.

### A [Memory Matching Game](https://www.memozor.com/memory-games/for-kids/pokemon-game)

- The game starts out with a series of paired images that are hidden from the user.
- The first 2 images the user clicks on are revealed.
- If the revelaed images match they remain uncovered.
- If the images do not match, they are hidden once again.
- The user continues until they have matched all the images.

_Additional_

- Keep track of how many guesses it took the user to complete the game.
- Randomise the starting position of the images to stop people cheating.

### A [Simon Game](<https://en.wikipedia.org/wiki/Simon_(game)>)

- When the user starts the game a series of colours / images / sounds are shown to the user.
- The user must then recreate the series in the correct order.
- If they get it right the series gains an extra step and is repeated.
- If the user guesses any part of the series incorrectly the game is over and they gain points for how many they managed to remember correctly.

_Additional_

- Keep a high score for the current user to beat.
- Add a delay between each part of your sequence using timeouts from the resources below.

### Which <insert_pop_culture_reference_here> are you?

- Time to go make some clickbait. Ask your user a series of mutliple choice questions in turn.
- When the user answers a question move on to the next one.
- After all of the questions have been answered use their answers to match them to a particular choice. Think carefully about how you will weigh up their answers to make your final decision.

_Additional_

- Randomise the questions to keep your quiz interesting. (Make sure you don't repeat any questions!)

### Resources

There are lots of resources online for information about the DOM, such as W3schools and MDN. Here are some examples:

- [Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Element API](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [Node API](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [Timeout and Intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals) If you need to delay some functionality for your mini-app then one solution is to use `setTimeout` or `setInterval`.

(Note that Elements are a type of Node! So some methods you might expect to exist on the Element API are actually Node methods.)
