# AddressBook

The software to be designed is a program that can be used to maintain an address book. An address book holds a collection of entries, each recording a person's name and contact number.

## Features:

- Add new contact.
- Add bulk of contacts at a time.
- Fetch details of single contact.
- Fetch phase matching results also.
- Fetch the list of contacts.
- Update any contact.
- Delete any contact.
- Pagination

## Hosted Links:

- [https://dheerendra-address-book.herokuapp.com/](https://dheerendra-address-book.herokuapp.com/)

## How to get started:

- #### Clone the repo: https://github.com/DheeruThakur/Assignment2

- #### Install dependencies:

        `npm i`

- #### Run the server:
        `npm start`

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
