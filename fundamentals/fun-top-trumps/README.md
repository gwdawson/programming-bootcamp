## Top Trumps Card Game


Using the Object Oriented Programming skills you've learned this week, we want you to implement the classic Top Trumps card game!

## Day 1

In day 1 of this sprint you are expected to use the pseudo-classical pattern of object creation in order to create your cards, collectors and game objects.  Remember to think about which properties and methods should belong to each of these different objects!

## Day 2

In day 2 of this sprint you should re-factor your code to make use of ES6 classes.  Any code that uses the pseudo-classical pattern of object creation should be re-factored into classes.


## Cards

- Each card should have a name, and five attributes attached to it  
- Each card should have a type property, only cards of the same type can play against each other.
- Every card should have a quote method available, which returns its quote.
- Every card should have a funFact method available, which returns its fun fact.

## Collector
- Card collectors will have a name, and a way of storing their cards. 
- Each card collector will also have a buy method available, so they can store more cards. 

## Game
- Finally, you will need a way to play the cards. 
- The game should take two collectors and the names of the cards they wish to play. The cards should be in an ordered list.
- The game should have a turn method available. This should take the card at the top of the list with a defined attribute. The attributes on the two opposing cards will then be compared. 
- Whichever card has the larger number for the specific attribute wins the round. The collector who's card that is then steals the losing card. The losing card will be put to the back of their list.
- The winning card will stay in play, the collector who lost will then play their next card in the list with a specified attribute.
- Once one of the collectors loses all their cards, the other collector wins.

### Type ideas

> There are some sample card sets in `sample-data.md`. Feel free to use these in your project!

- TV show characters
- Sports stars
- Countries 
- Movie characters 
- Superheroes

## Making the game
Once you have all the necessary parts fully tested, make the game! 

Using the [inquirer library](https://github.com/SBoudrias/Inquirer.js), build a command line application to play your top trumps game. The game should be played using inputs and selections. 

### Extra Requirements
- Implement a shuffle method that shuffles the collectors cards.
- Implement a method to decide who goes first.
- In the case of a tie between two cards, place these cards into a holding area and play the next turn. Whichever collector wins the next round then steals the previous two cards along with the current playing losing card.
