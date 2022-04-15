# fe-nc-marketplace

Northcoders are creating an online marketplace where we can find new homes for all of the unused items we have lying around, rather than letting them go to waste or just throwing them out. Users will be able to list items they no longer want and other users can order them from each other. We have a lot of <s>old rubbish</s> retro antiques to get rid of so the items are all sorted into categories to make searching though them easier.

## Getting Started

Use [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) to begin your project:

```bash
npx create-react-app .
```

## Getting The Data

We are going to need some data in order to build the user interface for the marketplace. Our react application can then make API requests and display the information on the page. For this purpose the nc devs have built an API for you to retrieve data about the items, categories and users.

You can find the api in [this repo](https://github.com/northcoders/fe-nc-marketplace-api) as well as it's docs and instructions for hosting your own version of it.

**nb** You will need to host your own version of the api on [Heroku](https://heroku.com/) before getting started on your front end so do this first and have an explore around the available data.

## The Desired Solution

Northcoders have hired you and your pair as contractors to deliver a prototype for 'NC Marketplace.' At this stage we have a database of items and users setup with a rudimentary API. This api has endpoints to allow users to retrieve and add items as well manage which items users would like to buy. You need to create a user friendly interface for this API that will allow users to list and buy items from each other. Northcoder's team have provided a list of user stories for the application:

- As a user, I can view a list of available items.
- As a user, I can view a list of items for a particular category.
- As a user, I can list an item to sell.
- As a user, I can delete an item listing if I change my mind.
- As a user, I can order an item.
- As a user, I can view which items I have previously ordered.
- As a user, I can give another user kudos to make them feel good about themselves.
- As a user, I can add an item to my basket to order later if I am still browsing.
- As a user, I can view which items I have added to my basket.
- As a user, I can remove items from my basket.
- As a user, I can create a new user profile.

These user stories do not have to be completed in any particular order and the implementation of them is up to you. As always start by planning your app and work on each feature in turn.

As the api is still in development there are some considerations to make:

1. The api has several endpoints and queries it accepts. You do not have to make use of all of them for now and several have been included to allow future expansion. Focus on your user stories and use appropriate endpoints.
2. Users do not need to authenticate at this time. This will be handled later by the NC auth service so your users just need a username to act as for now. We will add an auth layer at a later point.
3. The items can have prices (or set them to zero if you're feeling generous). No actual money will change hands as part of this app and we will add a separate service to handle this at a later point.

### Advanced

Software development is an ongoing process and there's always more you could add to any application. If you're happy with your implementation of the above stories then there are a few extra things members of the team have requested. Implement some of these features or feel free to add your own that you think will bring value to the app.

### Nice to haves

- As a user, I can sort a large list of items to make them easier to view.
- As a user, I can search through a large list of items to make them easier to view.
- As a user, I can create an additional category if there isn't one that suits my item.
- As a user, I can edit my profile information.
- As a user, I can view a preview of my avatar when changing it to see if I like the look of it.
