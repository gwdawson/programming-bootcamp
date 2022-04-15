---
id: post-user
title: POST /api/users
sidebar_position: 2
---

Creates a new user

## Request Body

Accepts the following keys:

- username: String **required**
- avatar_url: String

```json
{
  "username": "Doug",
  "avatar_url": "https://example.com/doug.jpg"
}
```

## Example Response

```json
{
  "user": {
    "username": "Doug",
    "avatar_url": "https://example.com/doug.jpg",
    "kudos": 0
  }
}
```
