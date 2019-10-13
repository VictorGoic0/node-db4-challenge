### Recipes

| Field | Data Type | Modifiers                                   |
| ----- | --------- | ------------------------------------------- |
| id    | integer   | PK, auto-increment                          |
| name  | string    | required, unique, limited to 128 characters |

### Ingredients

| Field | Data Type | Modifiers                                   |
| ----- | --------- | ------------------------------------------- |
| id    | integer   | PK, auto-increment                          |
| name  | string    | required, unique, limited to 128 characters |

### Recipe Ingredients

| Field         | Data Type | Modifiers                                                   |
| ------------- | --------- | ----------------------------------------------------------- |
| id            | integer   | PK, auto-increment                                          |
| recipe_id     | integer   | FK, required, references id in recipes                      |
| ingredient_id | integer   | FK, required, references id in ingredients                  |
| quantity      | float     | references how many cups of this ingredient for that recipe |
