---
id: post-category
title: POST /api/categories
sidebar_position: 2
---

Creates a new category

## Request Body

Accepts the following keys:

- category_name: String **required**

```json
{
  "category_name": "Antiques"
}
```

## Example Response

```json
{
  "category": {
    "category_name": "Antiques"
  }
}
```
