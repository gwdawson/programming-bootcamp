---
id: get-items
title: GET /api/items
sidebar_position: 1
---

Lists all available items. (Items that have already been ordered will not be listed)

## Queries

| key           | Value                                    | Default Value | Description                                 |
| ------------- | ---------------------------------------- | ------------- | ------------------------------------------- |
| category_name | existing category_name                   | Optional      | Filters results to only the passed category |
| sort_by       | any response key (item_id, price, etc..) | item_name     | The key in which to sort results by         |
| order         | asc / desc                               | asc           | The order in which results are sorted       |
| search        | String                                   | Optional      | A search term to filter item_names by       |
| limit         | Integer                                  | Optional      | The amount of results to return per page    |
| p             | Integer                                  | Optional      | Which page of results to return             |
| min_price     | Integer                                  | Optional      | The minimum price of returned items         |
| max_price     | Integer                                  | Optional      | The maximum price of returned items         |

**nb** Limit and p must be provided together or omitted for all results

## Example Response

```json
{
  "items": [
    {
      "item_id": 1,
      "item_name": "The Holy Grail",
      "description": "Defo the real deal and not a prop from Indiana Jones",
      "img_url": "https://test.com/The Holy Grail.jpg",
      "price": 5000,
      "category_name": "Relics"
    },
    {
      "item_id": 2,
      "item_name": "The sword of 1000 truths",
      "description": "Not to be entrusted to a noob",
      "img_url": "https://test.com/1000-truths.jpg",
      "price": 2999,
      "category_name": "Relics"
    }
  ],
  "total_items": 2
}
```
