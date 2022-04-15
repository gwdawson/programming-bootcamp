---
id: get-basket
title: GET /api/users/:username/basket
sidebar_position: 1
---

Lists all items currently in the users basket.

## Example Response

```json
{
  "items": [
    {
      "item_id": 3,
      "item_name": "1990s Gameboy",
      "description": "But mom I want one!",
      "img_url": "https://test.com/1990s-Gameboy.jpg",
      "price": 1599,
      "category_name": "Electronics"
    },
    {
      "item_id": 4,
      "item_name": "New iMac",
      "description": "Good lord is it pretty",
      "img_url": "https://test.com/New-iMac.jpg",
      "price": 100000000,
      "category_name": "Electronics"
    }
  ]
}
```
