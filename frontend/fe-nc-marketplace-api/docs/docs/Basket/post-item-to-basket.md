---
id: post-item-to-basket
title: POST /api/users/:username/basket
sidebar_position: 2
---

Adds the item to the users basket.

## Request Body

Accepts the following keys:

- item_id: Integer **required**

```json
{
  "item_id": 1
}
```

## Example Response

```json
{
  "item": {
    "item_id": 1,
    "item_name": "The Holy Grail",
    "description": "Defo the real deal and not a prop from Indiana Jones",
    "img_url": "https://test.com/The Holy Grail.jpg",
    "price": 5000,
    "category_name": "Relics"
  }
}
```
