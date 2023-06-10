# mongo-node-express-app

User REST API

## Authors

- [@Abhishek Adhikari](https://github.com/Ad-Abhishek)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME`

`DB_PASSWORD`


## Quickstart

git clone https://github.com/Ad-Abhishek/mongo-node-express-app.git

cd mongo-node-express-app

npm install && npm start


## API Reference

#### Get all users

```http
  GET /api/users
```



#### Get a user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Post user

```http
  POST /api/users
```

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{"name": "abhishek","email": "avsek@v.com","age": 54}`      | `object`   | **Required**. email, name, id of user to create |

#### Put user

```http
  PUT /api/users/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{"name": "abhishek","email": "avsek@v.com","age": 54}`      | `object`   | **Required**. email, name, id of user to update |

#### Delete user

```http
  DELETE /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |
