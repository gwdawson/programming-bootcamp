---
id: get-user-by-username
title: GET /api/users/:username
sidebar_position: 3
---

Responds with the requested username's profile, a count of items in their basket and total items ordered.

## Example Response

```json
{
  "user": {
    "username": "Paul-R",
    "avatar_url": "https://example.com/Paul-R.jpg",
    "kudos": 15,
    "items_in_basket": 2,
    "items_ordered": 1
  }
}
```
