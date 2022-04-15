---
id: patch-user-by-username
title: PATCH /api/users/:username
sidebar_position: 4
---

Updates the users profile with keys from the request body.

## Request Body

Accepts the following keys:

- username: String
- avatar_url: String
- kudos_inc: Integer - The amount of kudos to add to the users profile

```json
{
  "avatar_url": "newUrl",
  "kudos_inc": 1
}
```

## Example Response

The updated user

```json
{
  "user": {
    "username": "Paul-R",
    "avatar_url": "newUrl",
    "kudos": 16,
    "items_in_basket": 2,
    "items_ordered": 1
  }
}
```
