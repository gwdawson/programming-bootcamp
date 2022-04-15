---
id: post-items
title: POST /api/items
sidebar_position: 2
---

Adds a new item.

## Request Body

Accepts the following keys:

- item_name: String **required**
- img_url: String **required**
- price: Integer - Prices are measured in pence. Set to zero for free items **required**
- description: String
- category_name: String - existing category_name

```json
{
  "item_name": "Test item",
  "description": "testy mc test face",
  "img_url": "https://test.com/Test-item.jpg",
  "price": 100,
  "category_name": "Relics"
}
```

## Example Response

```json
{
  "item": {
    "item_id": 10,
    "item_name": "Test item",
    "description": "testy mc test face",
    "img_url": "https://test.com/Test-item.jpg",
    "price": 100,
    "category_name": "Relics"
  }
}
```
