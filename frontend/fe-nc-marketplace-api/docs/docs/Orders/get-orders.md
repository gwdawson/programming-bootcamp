---
id: get-orders
title: GET /api/users/:username/orders
sidebar_position: 1
---

Lists all items the user has ordered. These items will not be displayed by GET /api/items

## Example Response

```json
{
  "items": [
    {
      "item_id": 5,
      "item_name": "React Native online tutorials",
      "description": "Are React and React Native the same thing though?",
      "img_url": "https://test.com/React-Native-tutorials.jpg",
      "price": 1099,
      "category_name": "Electronics"
    }
  ]
}
```
