# Pseudo-classes

Sometimes elements need to change their style or behaviour, depending on its current state. For example, we may want a text link to have a different colour when we've already visited that link before. Or perhaps we have a button that changes colour when we hover over it.

In CSS, we achieve this using **pseudo-classes**. Pseudo-classes are keywords that we add to CSS selectors in order to specify its look or behaviour when it's in a particular state.

> "Pseudo" is pronounced "_syoo_-doh" or "_soo_-doh".

Here we'll show you three common examples, but there are [many pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) to choose from.

---

## :hover

The `:hover` pseudo-class selects an element when the mouse cursor is over it.

```css
.button {
  background-color: #0099ff;
}

.button:hover {
  background-color: #00ff99;
}
```

> As you might have guessed, `:hover` doesn't work on mobile or tablet devices. These devices don't have cursors with which you can hover over elements.

## :disabled

The `:disabled` pseudo-class provides conditional styling to HTML elements that can usually receive user input, but have been given the "disabled" attribute in the HTML so that they can no longer receive input.

Have you ever filled out a web form and noticed that the "Submit" button was "greyed-out" until all the fields have been filled in? That's `:disabled` at work.

```css
.button {
  background-color: #0099ff;
}

.button:disabled {
  background-color: #999999;
}
```

## :focus

The `:focus` pseudo-class is used for styling an element that is currently targeted by the keyboard, or activated by the mouse.That could mean that it's been clicked on with a cursor, tapped on if it's on a mobile device, or selected with the Tab key.

`:focus` can be incredibly useful when addressing accessibility concerns. [This is a great resource](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) for designing useful focus indicators.

By default, an element that has been brought into focus will have a "focus ring" around it. In many of the most common browsers, this will look like a blue border with slightly rounded corners.

## Tasks

Take a look at Shopcoders, the best place to shop for fashionable yet comfortable Northcoders styles! Our storefront is taking shape, but we're lacking a little bit of interactivity. Let's put some pseudo-classes to work.

### Task 1: :hover

Using the `:hover` pseudo-class, change the styling of each of the buttons when you hover over them with your cursor.

### Task 2: :disabled

Unfortunately, the apron is out of stock, and its button has been disabled in the HTML. Using the `:disabled` pseudo-class, style it so that it not only looks different from the other buttons, but that it's clear to every visitor that this button isn't clickable.

### Task 3: :focus

Using the `:focus` pseudo-class, change the styling of each button when it comes into focus. Bear in mind that, although your styling here might end up being similar to the styling you've used for `:hover`, `:focus` comes in useful for users who aren't using a mouse or trackpad!

> Pro tip: Instead of using your cursor on the page in your browser for this task, use the Tab key on your keyboard instead. Look out for the focus ring!
