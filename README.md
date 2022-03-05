## API Reference

#### Add contact

```http
  POST /contact/add
```

| Request Body | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `contact`    | `number` | **Required**. Your contact number |
| `name`       | `string` | Your name                         |

#### Add bulk contacts

```http
  POST /contact/add/bulk
```

| Request Body | Type               | Description                       |
| :----------- | :----------------- | :-------------------------------- |
|              | `array of objects` | **Required**. Your contact number |

#### Fetch a contact by it's id

```http
  GET /contact/fetch/:contactId
```

#### Fetch a contact by it's contact number

```http
  GET /contact/fetch/bycontact/:contact
```

#### Fetch all contacts

```http
  GET /contact/fetch
```

#### Update a contact

```http
  PUT /contact/update/:contactId
```

| Request Body | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `contact`    | `number` | **Required**. Your contact number |
| `name`       | `string` | Your name                         |

#### Delete a contact

```http
  POST /contact/delete/:contactId
```

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `contactId` | `string` | **Required**. Contact's Id |

#### Returns the jwt token to the client

```http
  GET /token/
```
