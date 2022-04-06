# FORM VALIDATION

For this sprint, you are being asked to create a **form** using the DOM which will validate a range of different user inputs.

## Form choices:

Below are some examples of forms that your users could use to submit information. Choose one of the following options or come up with your own theme if you're feeling creative. Just remember, the point of this is to validate the users inputs and provide appropriate feedback so make sure that you can apply some kind of restriction to the user input.

### Account creation

Design a typical **account creation form** for a fictional website. If all details are valid, `submit` should take the user to a new page showing them the details of their newly created account.

Fields to collect from your user:

| Field            | Restrictions                                                                |
| ---------------- | --------------------------------------------------------------------------- |
| First Name       | Required                                                                    |
| Last Name        | Required                                                                    |
| Username         | Must be a mix of letters and numbers, no other characters or spaces allowed |
| Avatar Image url | Valid Url                                                                   |

#### Submit Page

Once the user has signed up to your website they should be taken to a profile page where they can view all of the information they've just submitted. Think about the layout of profile pages you may have used in the past and create a user friendly site displaying their information.

_Additional_

- Allow your users to choose between _light_ and _dark_ mode for their profile. Style their profile page according to their preference.

### Horoscope Generator

Create a form to collect some personal information from the user in order to generate their horoscope. The horoscopes should change based on the information the user has provided but can be generated in any way you see fit.

Fields to collect from your user:

| Field      | Restrictions                                      |
| ---------- | ------------------------------------------------- |
| First Name | Required                                          |
| Last Name  | Required                                          |
| Star Sign  | Must be a valid star sign (Aries, Taurus, etc...) |

#### Submit Page

Use the users details to display their horoscope. The one they recieve should be based on the star sign they've submitted.

_Additional_

- Collect the users Date of Birth. Generate a different horoscope based upon whether the user is over or under 30 years old.

### Business Card Generator

Create a form to collect some personal information from the user in order to generate a professional looking business card. The presentation of the card will be very important.

Fields to collect from your user:

| Field        | Restrictions                  |
| ------------ | ----------------------------- |
| First Name   | Required                      |
| Last Name    | Required                      |
| Company      | Required                      |
| Job Title    | Required                      |
| Email        | Must be a valid email address |
| Phone Number | Must be a valid phone number  |

#### Submit Page

Use the users submitted details to produce a professional looking business card.

_Additional_

- Give the users a choice of templates to alter the style of card produced.

### Meme Generator

Create a form that allows users to create their own memes. The form should allow the user to choose an image to caption as well as the accompanying text.

Fields to collect from your user:

| Field        | Restrictions      |
| ------------ | ----------------- |
| Top Text     | Max 50 characters |
| Bottom Text  | Max 50 characters |
| Image Choice | Required          |

#### Submit Page

The users text superimposed onto their chosen image.

_Additional_

- Allow the users to choose images that require different amounts of text. e.g. 1 or more text inputs.

## Tasks

- Create a basic page containing your form. The user should be able to fill out your form correctly and be taken to the submit page.
- Make sure the user can't submit the form without providing valid inputs for all required fields. Think about what kind of feedback you can give them that would let them know where the mistakes are if they try and submit too early.
- Give the user feedback if they fill out an input incorrectly. You should make use of a variety of [**html DOM events**](https://www.w3schools.com/jsref/dom_obj_event.asp) to trigger feedback at the appropriate time. Some useful ones will be `blur`, `change` and `keyup` events.
- You should attempt use of `event.target` - another way of accessing the item that has triggered the [event](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).
- You should use `DOM` methods if you want to hide things or create new elements.
- Style your form to improve your UX.
- Add styling to your error messages to draw the users attention. Try using [DOM classList methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

### For all inputs, bear in mind the following:

- As a user I want to be told why my input is invalid.
- As a colour blind user I want feedback to not only be based on colour.
- As a non-native speaker, seeing a visual indicator would be an easier way for me to understand feedback than just text.

- Add some functionality to the submit page. Take the values submitted by your form and display them on the page. Your form will have to submit the values that can be read from the page using [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get)
- Style your submit page.

Form validation is more than coding - it is a service you provide to users, and as such, there are practices and expectations in terms of accessibility, usability and functionality. Best practice rules are ignored at your peril! Here are some interesting articles that document the sort of approaches you should adopt when designing your form, from [smashingmagazine](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) and [designmodo](https://designmodo.com/ux-form-validation/).

There are a lot of [html input attribute types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that your browser can use to modify behaviour on your form, some of which you may never use again, but could be experimented with now.

[CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) interpret other element attributes. Don't forget that CSS can be used more broadly to signal things too; people make inferences from colour, font size and font style, for example.

- Add some additional inputs to your form. Look through the available input types above and think about how you would validate and provide feedback at appropriate times.

### Helpful links:

Writing regular expressions to validate complex inputs such as URL's or emails is difficult. A task such as this would typically be handled by a library. There are a couple of regex's below for convenience and to give you an idea of how complicated this can get.

URL Regex

```js
/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
```

Email Regex

```js
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```
